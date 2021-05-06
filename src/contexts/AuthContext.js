import React, { useEffect, useContext, useState } from "react";
import { auth, provider, database } from "../firebase.js";
import firebase from "firebase/app";

const AuthContext = React.createContext();

var isOfflineForDatabase = {
  state: "offline",
  last_changed: firebase.database.ServerValue.TIMESTAMP,
};

var isOnlineForDatabase = {
  state: "online",
  last_changed: firebase.database.ServerValue.TIMESTAMP,
};

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [profile, setProfile] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function loginWithGoogle() {
    return await auth
      .signInWithPopup(provider)
      .then((res) => {
        const ref = database.ref(`leaderboards/${res.user.uid}`);

        ref.on("value", (snapshot) => {
          if (!snapshot.exists()) {
            try {
              const leaderboardsRef = database.ref("leaderboards");
              const newLeaderboardsRef = leaderboardsRef.child(res.user.uid);

              newLeaderboardsRef.set({
                name: res.user.displayName,
                photo: res.user.photoURL,
              });

              const alexRef = leaderboardsRef.child(
                `${res.user.uid}/score/alex`
              );
              const riniRef = leaderboardsRef.child(
                `${res.user.uid}/score/rini`
              );
              const citraRef = leaderboardsRef.child(
                `${res.user.uid}/score/citra`
              );

              alexRef.set({
                uid: "-MXzipMjH3lqDrTEluq4",
                point: 0,
                wrong: 0,
                photo:
                  "https://firebasestorage.googleapis.com/v0/b/bambangandfriends-999c6.appspot.com/o/alex.jpg?alt=media&token=7865c02c-cc18-495a-99cb-6d086993df85",
              });

              riniRef.set({
                photo:
                  "https://firebasestorage.googleapis.com/v0/b/bambangandfriends-999c6.appspot.com/o/rini.jpg?alt=media&token=f4825c53-2c5b-45b0-8cea-53c1b55bb005",
                point: 0,
                uid: "-MXziRMJc9DTR5YOujkV",
                wrong: 0,
              });

              citraRef.set({
                photo:
                  "https://firebasestorage.googleapis.com/v0/b/bambangandfriends-999c6.appspot.com/o/citra.jpg?alt=media&token=b94b3f08-f9c1-42ca-b704-cac30a052bfa",
                point: 0,
                uid: "-MXzied2vhBpD5xIlfoU",
                wrong: 0,
              });
            } catch (e) {
              console.error(e);
            }
          }
        });

        return () => ref.off;
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    const leaderboardsRef = database.ref(`leaderboards/${currentUser.uid}`);

    leaderboardsRef.update(isOfflineForDatabase);

    return auth.signOut();
  }

  function leaderboards(user) {
    if (user !== null) {
      const leaderboardsRef = database.ref(`leaderboards/${user.uid}`);

      database.ref(".info/connected").on("value", function(snapshot) {
        // If we're not currently connected, don't do anything.
        if (snapshot.val() === false) {
          leaderboardsRef.update(isOfflineForDatabase);
        } else {
          leaderboardsRef
            .onDisconnect()
            .update(isOfflineForDatabase)
            .then(function() {
              leaderboardsRef.update(isOnlineForDatabase);
            });
        }
      });

      leaderboardsRef.on("value", (snapshot) => {
        setProfile(snapshot.val());
      });

      return () => leaderboardsRef.off;
    }
  }

  function setPresence(state) {
    if (currentUser) {
      return database.ref(`leaderboards/${currentUser.uid}`).update({
        state,
        last_changed: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }

  function updateOnAway() {
    document.onvisibilitychange = (e) => {
      if (document.visibilityState === "hidden") {
        setPresence("away");
      } else {
        setPresence("online");
      }
    };
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setProfile();
      setCurrentUser(user);
      setLoading(false);

      leaderboards(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    updateOnAway();
  }, []);

  const value = {
    currentUser,
    profile,
    loginWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

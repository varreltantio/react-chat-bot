import React, { useEffect, useContext, useState } from "react";
import { database } from "../firebase";

const ProfileContext = React.createContext();

export function useProfile() {
  return useContext(ProfileContext);
}

export function ProfileProvider({ children }) {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = database.ref("games");

    ref.on("value", (snapshot) => {
      setAllGames(snapshot.val());
      setLoading(false);
    });

    return () => ref.off;
  }, []);

  const value = {
    allGames,
  };

  return (
    <ProfileContext.Provider value={value}>
      {!loading && children}
    </ProfileContext.Provider>
  );
}

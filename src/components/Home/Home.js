import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase";

import "./Home.css";

export default function Home() {
  const [presence, setPresence] = useState([]);
  const { logout, profile, currentUser } = useAuth();

  const history = useHistory();

  useEffect(() => {
    const ref = database.ref("leaderboards");

    ref.on("value", (snapshot) => {
      setPresence(snapshot.val());
    });
  }, []);

  async function handleLogout() {
    try {
      await logout();
      history.push("/join");
    } catch (e) {
      console.error(e);
    }
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="profile">
        <h3 className="title">Home</h3>
        <img src={profile.photo} />
        <p className="name">{profile.name}</p>
        <hr className="hr"></hr>
        <div className="rules">
          <h3>How to play:</h3>
          <p className="desc">1. Select profile on the left</p>
          <p className="desc">
            2. You have to finish the conversation properly
          </p>

          <h3>Note:</h3>
          <div className="dot"></div>
          <p className="note">if you fail, the wrong score will increase</p>
          <div className="dot"></div>
          <p className="note">if you successful, the points will increase</p>
        </div>
      </div>
      <div className="user-presence">
        <h3 className="title-presence">Online</h3>
        <div className="user">
          {Object.keys(presence).map((value, index) => {
            if (
              presence[value].state === "online" &&
              value !== currentUser.uid &&
              index < 7
            ) {
              return (
                <>
                  <div className="detail-user">
                    <div className="image_outer_container">
                      <div className="green_icon"></div>
                      <div className="image_inner_container">
                        <img src={presence[value].photo} />
                      </div>
                    </div>
                    <p className="user-online-name">{presence[value].name}</p>
                  </div>
                </>
              );
            }
          })}
        </div>
        <div className="footer">
          <button className="logout" onClick={handleLogout}>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

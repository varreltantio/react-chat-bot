import React from "react";
import { useHistory } from "react-router-dom";
import { FaStar, FaTimesCircle } from "react-icons/fa";
import swal from "sweetalert";

import { useAuth } from "../../contexts/AuthContext";

import "./ChatRoom.css";

const ChatRoom = ({ handleGame }) => {
  const history = useHistory();
  const { profile } = useAuth();

  const ModalRepeat = (name) => {
    swal({
      title: "Kamu sudah menyelesaikan percakapan",
      text: "Apakah kamu ingin melihat percakapan atau mengulang percakapan?",
      buttons: {
        ulangi: {
          text: "ULANGI",
          value: "ulangi",
        },
      },
    }).then((value) => {
      switch (value) {
        default:
          let app2 = document.getElementById("app__container");
          app2.classList.remove("is_sidebar_open");
          app2.classList.toggle("is_message_open");
          break;
      }

      handleGame(name);

      history.push(`/chat/${name}`);
    });
  };

  const ModalPlay = (name) => {
    swal({
      title: "Klik play untuk memulai permainan",
      buttons: "PLAY",
    }).then(() => {
      let app = document.getElementById("app__container");
      app.classList.remove("is_sidebar_open");
      app.classList.toggle("is_message_open");

      handleGame(name);

      history.push(`/chat/${name}`);
    });
  };

  const handleMessage = (score) => {
    if (score.point === 100) {
      ModalRepeat(score.uid);
    } else {
      ModalPlay(score.uid);
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {Object.keys(profile.score).map((value) => (
        <div
          className="chatroom"
          id="chatroom"
          key={value}
          onClick={() => handleMessage(profile.score[value])}
        >
          <div className="MuiAvatar-root MuiAvatar-circle">
            <img src={profile.score[value].photo} className="MuiAvatar-img" />
          </div>
          <div className="chatinfo">
            <h3>{value}</h3>
            <ul className="common-nav-list">
              <li>
                <FaStar color="#ffd700" />
              </li>
              <li>
                <span className="icon-chatinfo">
                  {profile.score[value].point}
                </span>
              </li>
              <li>
                <FaTimesCircle color="#ff0000" />
              </li>
              <li>
                <span className="icon-chatinfo">
                  {profile.score[value].wrong}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatRoom;

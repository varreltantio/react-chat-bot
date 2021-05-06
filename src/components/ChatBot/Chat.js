import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import ChatBot from "react-simple-chatbot";
import swal from "sweetalert";

import { database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

import "./Chat.css";

import Arrow from "../../assets/arrow.png";

import riniSuccess from "../../assets/rini-success.jpg";
import riniFailed from "../../assets/rini-failed.jpg";
import citraSuccess from "../../assets/citra-success.jpg";
import citraFailed from "../../assets/citra-failed.jpg";
import alexSuccess from "../../assets/alex-success.jpg";
import alexFailed from "../../assets/alex-failed.jpg";

const config = {
  hideBotAvatar: true,
  hideUserAvatar: true,
};

const Chat = ({ game, handleGame }) => {
  const [success, setSuccess] = useState();
  const [failed, setFailed] = useState();
  const [newScore, setNewScore] = useState([]);

  const history = useHistory();

  const { currentUser, profile } = useAuth();

  useEffect(() => {
    async function createDOMElement() {
      try {
        if (game.name === "rini") {
          setSuccess(riniSuccess);
          setFailed(riniFailed);
        }
        if (game.name === "citra") {
          setSuccess(citraSuccess);
          setFailed(citraFailed);
        }
        if (game.name === "alex") {
          setSuccess(alexSuccess);
          setFailed(alexFailed);
        }

        Object.keys(profile.score).map((value) => {
          if (value === game.name) {
            setNewScore(profile.score[value]);
          }
        });

        const element = await (
          <>
            <h2 className="rsc-header-title">{game.name}</h2>
            <a onClick={handleSideBar}>
              <img src={Arrow} />
            </a>
          </>
        );

        await ReactDOM.render(element, document.querySelector(".rsc-header"));
      } catch (e) {
        console.log(e);
      }
    }

    createDOMElement();
  }, [ChatBot]);

  const handleEnd = ({ renderedSteps, steps, values }) => {
    const [value] = values.slice(-1);

    if (value === "benar") {
      setSuccess();
      swal({
        icon: success,
        title: "Mantap, persahabatan semakin kuat",
        buttons: "Lanjut",
      }).then(() => {
        const copyScore = { ...newScore };
        copyScore.point = 100;
        database
          .ref(`leaderboards/${currentUser.uid}/score/${game.name}`)
          .set(copyScore);
      });
    }

    if (value === "salah") {
      swal({
        icon: failed,
        title: "Persahabatan semakin hancur",
        buttons: "Ulangi!!!",
        dangerMode: true,
      }).then(() => {
        const copyScore = { ...newScore };
        copyScore.wrong += 1;
        database
          .ref(`leaderboards/${currentUser.uid}/score/${game.name}`)
          .set(copyScore);

        handleGame(newScore.uid);
      });
    }
  };

  const handleSideBar = () => {
    let app = document.getElementById("app__container");
    app.classList.remove("is_message_open");
    app.classList.toggle("is_sidebar_open");
    history.push("/");
  };

  if (game.length === 0) {
    return <div>Loading</div>;
  }

  return <ChatBot handleEnd={handleEnd} steps={game.chat} {...config} />;
};

export default Chat;

import React from "react";
import { Link } from "react-router-dom";

import "./ChatRoom.css";

import Rini from "../../assets/rini.jpg";
import Citra from "../../assets/citra.jpg";
import Alex from "../../assets/alex.jpg";
import Arrow from "../../assets/arrow.png"

const ChatRoom = () => {
  const handleMessage = () => {
    let app = document.getElementById("app__container");
    app.classList.remove("is_sidebar_open");
    app.classList.toggle("is_message_open");

    setTimeout(function () {
      createElement();
    }, 3000);
  }

  const handleSideBar = () => {
    let app = document.getElementById("app__container");
    app.classList.remove("is_message_open");
    app.classList.toggle("is_sidebar_open");
  }

  const createElement = () => {
    let chatHeader = document.querySelector(".rsc-header");
    let chatHeaderLogout = document.querySelector(".rsc-logout");

    if (chatHeaderLogout == null) {
      let a = document.createElement('a');
      a.title = "my title text";
      a.className = "rsc-logout";
      a.onclick = handleSideBar;
      chatHeader.appendChild(a);
  
      var para = document.createElement("IMG");
      para.setAttribute("src", Arrow);
      para.setAttribute("width", "20");
      para.setAttribute("height", "20");
      document.querySelector(".rsc-logout").appendChild(para);
    }
  }

  return (
    <>
      <Link to="/chat/rini">
        <div className="chatroom" id="chatroom" onClick={handleMessage}>
          <div class="MuiAvatar-root MuiAvatar-circle">
            <img src={Rini} class="MuiAvatar-img" />
          </div>
          <div className="chatinfo">
            <h3>Rini</h3>
          </div>
        </div>
      </Link>
      <Link to="/chat/citra">
        <div className="chatroom" id="chatroom" onClick={handleMessage}>
          <div class="MuiAvatar-root MuiAvatar-circle">
            <img src={Citra} class="MuiAvatar-img" />
          </div>
          <div className="chatinfo">
            <h3>Citra</h3>
          </div>
        </div>
      </Link>
      <Link to="/chat/alex">
        <div className="chatroom" id="chatroom" onClick={handleMessage}>
          <div class="MuiAvatar-root MuiAvatar-circle">
            <img src={Alex} class="MuiAvatar-img" />
          </div>
          <div className="chatinfo">
            <h3>Alex</h3>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ChatRoom;
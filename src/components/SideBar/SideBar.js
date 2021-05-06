import React from "react";
import ChatRoom from "../ChatRoom/ChatRoom";

import Bambang from "../../assets/bambang.jpg";

import "./SideBar.css";

const SideBar = ({ handleGame }) => (
  <div className="sidebar">
    <div className="sidebar__header">
      <div className="MuiAvatar-root MuiAvatar-circle">
        <img src={Bambang} className="MuiAvatar-img" />
      </div>
      <h3 className="sidebar__name">Bambang</h3>
      <div className="sidebar__headerright"></div>
    </div>
    <div className="siebar__search">
      <div className="sidebar__searchcontainer">
        <input placeholder="chats" type="text" />
      </div>
    </div>

    <div className="sidebar__chatsGroups">
      <ChatRoom handleGame={handleGame} />
    </div>
  </div>
);

export default SideBar;

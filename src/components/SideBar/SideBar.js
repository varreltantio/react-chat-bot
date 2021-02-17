import React from "react";
import ChatRoom from "../ChatRoom/ChatRoom";

import Bambang from "../../assets/bambang.jpg";

import "./SideBar.css";

const SideBar = () => (
  <div className="sidebar">
    <div className="sidebar__header">
      <div class="MuiAvatar-root MuiAvatar-circle">
        <img src={Bambang} class="MuiAvatar-img" />
      </div>
      <h3 className="sidebar__name">Bambang</h3>
      <div className="sidebar__headerright">
        
      </div>
    </div>
    <div className="siebar__search">
      <div className="sidebar__searchcontainer">
        <input placeholder="chats" type="text" />
      </div>
    </div>

    <div className="sidebar__chhatsGroups">
      <ChatRoom />
    </div>
  </div>
)

export default SideBar;
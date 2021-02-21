import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaTimesCircle } from "react-icons/fa";
import swal from '@sweetalert/with-react';

import "./ChatRoom.css";

import Rini from "../../assets/rini.jpg";
import Citra from "../../assets/citra.jpg";
import Alex from "../../assets/alex.jpg";

const ChatRoom = ({rini, citra, alex, handleChat}) => {
  const ModalRepeat =  (name) => {
    swal({
      title: "Kamu sudah menyelesaikan percakapan",
      text: "Apakah kamu ingin melihat percakapan atau mengulang percakapan?",
      buttons: {
        lihat: {
          text: "LIHAT",
          value: "lihat",
        },
        ulangi: {
          text: "ULANGI",
          value: "ulangi",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "ulangi":
          handleChat({ name: name, wrong: 0, messages: [], success: false})
          let app = document.getElementById("app__container");
          app.classList.remove("is_sidebar_open");
          app.classList.toggle("is_message_open");
          break;
        default:
          let app2 = document.getElementById("app__container");
          app2.classList.remove("is_sidebar_open");
          app2.classList.toggle("is_message_open");
          break
      }
    });
  }

  const ModalPlay = () => {
    swal({
      title: "Klik play untuk memulai permainan",
      buttons: "PLAY"
    })
    .then(() => {
      let app = document.getElementById("app__container");
      app.classList.remove("is_sidebar_open");
      app.classList.toggle("is_message_open");
    });
  }
 
  const handleMessage = (name) => {
    console.log(name);
    if (name == 'Rini') {
      if (rini.success === true) {
        ModalRepeat('Rini')
      } 
  
      if (rini.success === false) {
        ModalPlay()
      }
    }

    if (name == 'Citra') {
      if (citra.success === true) {
        ModalRepeat('Citra')
      } 
  
      if (citra.success === false) {
        ModalPlay()
      }
    }

    if (name == 'Alex') {
      if (alex.success === true) {
        ModalRepeat('Alex')
      }
  
      if (alex.success === false) {
        ModalPlay()
      }
    }
  }

  return (
    <>
      <Link to="/chat/rini">
        <div className="chatroom" id="chatroom" onClick={() => handleMessage('Rini')}>
          <div class="MuiAvatar-root MuiAvatar-circle">
            <img src={Rini} class="MuiAvatar-img" />
          </div>
          <div className="chatinfo">
            <h3>Rini</h3>
            <ul className="common-nav-list">
              <li>
                <FaStar color="#ffd700" />   
              </li>
              <li>
                <span className="icon-chatinfo">{rini.point}</span>  
              </li>
              <li>
                <FaTimesCircle color="#ff0000" />
              </li>
              <li>
                <span className="icon-chatinfo">{rini.wrong}</span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
      <Link to="/chat/citra">
        <div className="chatroom" id="chatroom" onClick={() => handleMessage('Citra')}>
          <div class="MuiAvatar-root MuiAvatar-circle">
            <img src={Citra} class="MuiAvatar-img" />
          </div>
          <div className="chatinfo">
            <h3>Citra</h3>
            <ul className="common-nav-list">
              <li>
                <FaStar color="#ffd700" />   
              </li>
              <li>
                <span className="icon-chatinfo">{citra.point}</span>  
              </li>
              <li>
                <FaTimesCircle color="#ff0000" />
              </li>
              <li>
                <span className="icon-chatinfo">{citra.wrong}</span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
      <Link to="/chat/alex">
        <div className="chatroom" id="chatroom" onClick={() => handleMessage('Alex')}>
          <div class="MuiAvatar-root MuiAvatar-circle">
            <img src={Alex} class="MuiAvatar-img" />
          </div>
          <div className="chatinfo">
            <h3>Alex</h3>
            <ul className="common-nav-list">
              <li>
                <FaStar color="#ffd700" />   
              </li>
              <li>
                <span className="icon-chatinfo">{alex.point}</span>  
              </li>
              <li>
                <FaTimesCircle color="#ff0000" />
              </li>
              <li>
                <span className="icon-chatinfo">{alex.wrong}</span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ChatRoom;
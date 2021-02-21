import React, { useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import swal from "sweetalert";

import Logout from "./Logout/Logout";

import "./Chat.css";

import Success from "../../assets/alex-success.jpg";
import Failed from "../../assets/alex-failed.jpg";

const config = {
  headerTitle: "Alex",
  hideBotAvatar: true,
  hideUserAvatar: true
};

const ChatAlex = ({handleChat, messages, wrong}) => {
  const handleEnd = ({ renderedSteps, steps, values }) => {
    const [value] = (values.slice(-1));

    if (value === "benar") {
      swal({
        icon: Success,
        title: "Mantap, persahabatan semakin kuat",
        buttons: "Lanjut!!!"
      }).then(() => {
        handleChat({point: 100, name: 'Alex', wrong: wrong, messages: renderedSteps, success: true});
      });
    }

    if (value === "salah") {
      swal({
        icon: Failed,
        title: "Persahabatan semakin hancur",
        buttons: "Ulangi!!!",
        dangerMode: true,
      }).then(() => {
        handleChat({ name: 'Alex', wrong: wrong + 1, messages: [], success: false});
      });
    }
  }

  useEffect(() => {
    Logout()
  }, [ChatBot])

  return (
    messages.length === 0 ? (
      <ChatBot 
        handleEnd={handleEnd}
        steps={[
          {
            id: "1",
            message: "p",
            trigger: "2",
            metadata: {name :"bot"}
          },
          {
            id: "2",
            options: [
              {
                value: "benar",
                label: "apaan?",
                trigger: "4"
              },
              {
                value: "salah",
                label: "ha",
                trigger: "4"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "4",
            message: "pinjem duit dong",
            trigger: "5",
            metadata: {name :"bot"}
          },
          {
            id: "5",
            options: [
              {
                value: "benar",
                label: "bayar dulu hutang kemarin",
                trigger: "6"
              },
              {
                value: "salah",
                label: "kagak",
                trigger: "6"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "6",
            message: "iye, kalo lagi ada duit",
            trigger: "7",
            metadata: {name :"bot"}
          },
          {
            id: "7",
            message: "ini kan akhir bulan bre",
            trigger: "8",
            metadata: {name :"bot"}
          },
          {
            id: "8",
            options: [
              {
                value: "benar",
                label: "terus??",
                trigger: "9"
              },
              {
                value: "salah",
                label: "lah sama, gw juga butuh duit",
                trigger: "9"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "9",
            message: "lo kan gajian di akhir bulan",
            trigger: "10",
            metadata: {name :"bot"}
          },
          {
            id: "10",
            message: "Ayolah bre, temen lo nih",
            trigger: "11",
            metadata: {name :"bot"}
          },
          {
            id: "11",
            options: [
              {
                value: "salah",
                label: "kagak, pokok bayar dulu",
                trigger: "12"
              },
              {
                value: "benar",
                label: "yaudah, gw traktir aja",
                trigger: "13"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "12",
            message: "Halah, temen tai",
            end: true,
            metadata: {name :"bot"}
          },
          {
            id: "13",
            message: "Oke, thanks bre",
            end: true,
            metadata: {name :"bot"}
          },
        ]}
        {...config}
      />
    ) : 
    (
      <div className="rsc">
        <div className="sc-jrAGrp kOVUJc rsc-container" width="350px" height="520px">
          <div className="sc-iqHYGH cRrAeq rsc-header">
            <h2 className="sc-crrsfI lhieOY rsc-header-title">Alex</h2>
          </div>
          <div className="sc-kEjbxe cLiekP rsc-content" height="520px">
            {messages.map((e) => (
                e.metadata.name === "bot" 
                ?  
                  <div className="sc-pFZIQ kjMtNk rsc-ts rsc-ts-bot" key={e.id}>
                    <div className="sc-fubCfw jHyrGj rsc-ts-image-container"></div>
                    <div className="sc-gKsewC bXxiRt rsc-ts-bubble">{e.message}</div>
                  </div>
                :       
                  <div className="sc-pFZIQ cXhuRT rsc-ts rsc-ts-user" key={e.id}>
                    <div className="sc-fubCfw cazGyy rsc-ts-image-container"></div>
                    <div className="sc-gKsewC rKDpI rsc-ts-bubble">{e.message}</div>
                  </div>
              )
            )}
          </div>
          <div class="sc-hBEYos hgFzca rsc-footer">
            <input type="textarea" class="sc-fodVxV iRRlIO rsc-input" placeholder="Type the message ..." disabled={true} value="" />
            <button class="sc-fFubgz kMLIPw rsc-submit-button" disabled="">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 500 500">
                <g><g><polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"></polygon></g></g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default ChatAlex;
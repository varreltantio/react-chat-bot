import React, { useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import swal from "sweetalert";

import Logout from "./Logout/Logout";

import "./Chat.css";

import Success from "../../assets/citra-success.jpg";
import Failed from "../../assets/citra-failed.jpg";

const config = {
  headerTitle: "Citra",
  hideBotAvatar: true,
  hideUserAvatar: true
};

const ChatCitra = ({handleChat, messages, wrong}) => {
  const handleEnd = ({ renderedSteps, steps, values }) => {
    const [value] = (values.slice(-1));

    if (value === "benar") {
      swal({
        icon: Success,
        title: "Mantap, persahabatan semakin kuat",
        buttons: "Lanjut!!!"
      }).then(() => {
        handleChat({point: 100, name: 'Citra', wrong: wrong, messages: renderedSteps, success: true});
      });
    }

    if (value === "salah") {
      swal({
        icon: Failed,
        title: "Persahabatan semakin hancur",
        buttons: "Ulangi!!!",
        dangerMode: true,
      }).then(() => {
        handleChat({ name: 'Citra', wrong: wrong + 1, messages: [], success: false});
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
            message: "Halo Bam",
            trigger: "2",
            metadata: {name :"bot"}
          },
          {
            id: "2",
            message: "Apa kabar?",
            trigger: "3",
            metadata: {name :"bot"}
          },
          {
            id: "3",
            options: [
              {
                value: "benar",
                label: "baik, kamu apa kabar?",
                trigger: "4"
              },
              {
                value: "salah",
                label: "alhamdulillah",
                trigger: "5"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "4",
            message: "Baik juga",
            trigger: "5",
            metadata: {name :"bot"}
          },
          {
            id: "5",
            message: "Sibuk apa sekarang",
            trigger: "6",
            metadata: {name :"bot"}
          },
          {
            id: "6",
            options: [
              {
                value: "benar",
                label: "kuliah",
                trigger: "7"
              },
              {
                value: "salah",
                label: "gk sibuk apa-apa",
                trigger: "7"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "7",
            message: "Aku boleh curhat gk?",
            trigger: "8",
            metadata: {name :"bot"}
          },
          {
            id: "8",
            options: [
              {
                value: "salah",
                label: "gk boleh",
                trigger: "9"
              },
              {
                value: "benar",
                label: "boleh",
                trigger: "10"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "9",
            message: "oh, makasih ya bam.",
            end: true,
            metadata: {name :"bot"}
          },
          {
            id: "10",
            message: "Aku lagi bingung nih bam",
            trigger: "11",
            metadata: {name :"bot"}
          },
          {
            id: "11",
            message: "Lagi banyak masalah juga",
            trigger: "12",
            metadata: {name :"bot"}
          },
          {
            id: "12",
            options: [
              {
                value: "salah",
                label: "halah gitu aja lemah",
                trigger: "13"
              },
              {
                value: "benar",
                label: "Cerita aja sini, mungkin aku bisa bantu",
                trigger: "14"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "13",
            message: "... :)",
            end: true,
            metadata: {name :"bot"}
          },
          {
            id: "14",
            message: "Makasih ya bam udah mau dengerin",
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
            <h2 className="sc-crrsfI lhieOY rsc-header-title">Citra</h2>
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

export default ChatCitra;
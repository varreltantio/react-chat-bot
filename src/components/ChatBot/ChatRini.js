import React, { useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import swal from 'sweetalert';

import Logout from "./Logout/Logout";

import "./Chat.css";

import Success from "../../assets/rini-success.jpg";
import Failed from "../../assets/rini-failed.jpg";

const config = {
  headerTitle: "Rini",
  hideBotAvatar: true,
  hideUserAvatar: true
};

const ChatRini = ({handleChat, messages, wrong}) => {
  const handleEnd = ({ renderedSteps, steps, values }) => {
    const [value] = (values.slice(-1));

    if (value === "benar") {
      swal({
        icon: Success,
        title: "Mantap, persahabatan semakin kuat",
        buttons: "Lanjut",
      }).then(() => {
        handleChat({point: 100, name: 'Rini', messages: renderedSteps, success: true, wrong: wrong});
      });
    }

    if (value === "salah") {
      swal({
        icon: Failed,
        title: "Persahabatan semakin hancur",
        buttons: "Ulangi!!!",
        dangerMode: true,
      }).then(() => {
        handleChat({ name: 'Rini', wrong: wrong + 1, messages: [], success: false});
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
            message: "Bam",
            trigger: "2",
            metadata: {name :"bot"}
          },
          {
            id: "2",
            message: "Lagi apa?",
            trigger: "3",
            metadata: {name :"bot"}
          },
          {
            id: "3",
            options: [
              {
                value: "benar",
                label: "Lagi chat kamu",
                trigger: "4"
              },
              {
                value: "salah",
                label: "Emang kenapa?",
                trigger: "5"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "5",
            message: "Emang gk boleh nanya!!",
            trigger: "6",
            metadata: {name :"bot"}
          },
          {
            id: "6",
            message: "Yaudah gk jadi.",
            end: true,
            metadata: {name :"bot"}
          },
          {
            id: "4",
            message: "oalah",
            trigger: "8",
            metadata: {name :"bot"}
          },
          {
            id: "8",
            message: "Ini, aku mau ngomong bentar",
            trigger: "9",
            metadata: {name :"bot"}
          },
          {
            id: "9",
            options: [
              {
                value: "salah",
                label: "Udah malem rin. Besok aja ya",
                trigger: "10"
              },
              {
                value: "benar",
                label: "Bahas acara minggu depan ya?",
                trigger: "11"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "10",
            message: "Penting BAMBANG",
            trigger: "12",
            metadata: {name :"bot"}
          },
          {
            id: "12",
            message: "Buat acara minggu depan nih",
            trigger: "13",
            metadata: {name :"bot"}
          },
          {
            id: "13",
            options: [
              {
                value: "benar",
                label: "Oalah, mau bahas apaan lagi?",
                trigger: "14"
              },
              {
                value: "salah",
                label: "Masih bisa dibahas besok kan?",
                trigger: "15"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: "14",
            message: "Itu kan kita kurang konsumsi nih",
            trigger: "16",
            metadata: {name :"bot"}
          },
          {
            id: "15",
            message: "Yaudah, kalo gk mau dibahas.",
            end: true,
            metadata: {name :"bot"}
          },
          {
            id: "11",
            message: "Nah itu tahu",
            trigger: "14",
            metadata: {name :"bot"}
          },
          {
            id: "16",
            options: [
              {
                value: "salah",
                label: "Kan udah dibilang budget kita dikit.",
                trigger: "17"
              },
              {
                value: "benar",
                label: "Iya, terus kamu mau gimana?",
                trigger: "18"
              }
            ],
            metadata: {name :"user"}
          },
          {
            id: '17',
            options:[
              {
                value: "salah",
                label: "Waktunya mepet lagi. Mending gk usah pake konsumsi",
                trigger: "19"
              },
            ],
            metadata: {name :"user"}
          },
          {
            id: '19',
            message: 'YAUDAH, PADAHAL AKU BISA NYARIIN SPONSOR!!!',
            end: true,
            metadata: {name :"bot"}
          },
          {
            id: '18',
            message: 'Aku bisa nih nyariin sponsor. Nanti aku minta bantuin ayahku',
            trigger: '20',
            metadata: {name :"bot"}
          },
          {
            id: '20',
            options:[
              {
                value: "benar",
                label: "Bagus dah kalo gitu, makasih rin",
                trigger: "21"
              },
            ],
            metadata: {name :"user"}
          },
          {
            id: '21',
            message: 'Iya sama-sama bam',
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
            <h2 className="sc-crrsfI lhieOY rsc-header-title">Rini</h2>
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

export default ChatRini;
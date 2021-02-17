import React from "react";
import ChatBot from "react-simple-chatbot";
import swal from "sweetalert";

import "./Chat.css";

import Success from "../../assets/rini-success.jpg";
import Failed from "../../assets/rini-failed.jpg";

const config = {
  headerTitle: "Rini",
  hideBotAvatar: true,
  hideUserAvatar: true,
};

const ChatRini = (props) => {
  const handleEnd = ({ steps, values }) => {
    const [value] = (values.slice(-1));

    if (value === "benar") {
      swal({
        icon: Success,
        title: "Mantap, persahabatan semakin kuat",
        buttons: "Lanjut!!!"
      });
    }

    if (value === "salah") {
      swal({
        icon: Failed,
        title: "Persahabatan semakin hancur",
        buttons: "Ulangi!!!",
        dangerMode: true,
      }).then((value) => {
        window.location.reload();
      });
    }
  }

  return (
    <ChatBot
      
      handleEnd={handleEnd}
      steps={[
        {
          id: "1",
          message: "Bam",
          trigger: "2"
        },
        {
          id: "2",
          message: "Lagi apa?",
          trigger: "3"
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
          ]
        },
        {
          id: "5",
          message: "Emang gk boleh nanya!!",
          trigger: "6"
        },
        {
          id: "6",
          message: "Yaudah gk jadi.",
          end: true
        },
        {
          id: "4",
          message: "oalah",
          trigger: "8"
        },
        {
          id: "8",
          message: "Ini, aku mau ngomong bentar",
          trigger: "9"
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
          ]
        },
        {
          id: "10",
          message: "Penting BAMBANG",
          trigger: "12"
        },
        {
          id: "12",
          message: "Buat acara minggu depan nih",
          trigger: "13"
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
          ]
        },
        {
          id: "14",
          message: "Itu kan kita kurang konsumsi nih",
          trigger: "16"
        },
        {
          id: "15",
          message: "Yaudah, kalo gk mau dibahas.",
          end: true
        },
        {
          id: "11",
          message: "Nah itu tahu",
          trigger: "14"
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
          ]
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
        },
        {
          id: '19',
          message: 'YAUDAH, PADAHAL AKU BISA NYARIIN SPONSOR!!!',
          end: true,
        },
        {
          id: '18',
          message: 'Aku bisa nih nyariin sponsor. Nanti aku minta bantuin ayahku',
          trigger: '20'
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
        },
        {
          id: '21',
          message: 'Iya sama-sama bam',
          end: true
        },
      ]}
      {...config}
    />
  )
}

export default ChatRini;
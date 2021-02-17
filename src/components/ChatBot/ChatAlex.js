import React from "react";
import ChatBot from "react-simple-chatbot";
import swal from "sweetalert";

import "./Chat.css";

import Success from "../../assets/alex-success.jpg";
import Failed from "../../assets/alex-failed.jpg";


const config = {
  headerTitle: "Alex",
  hideBotAvatar: true,
  hideUserAvatar: true
};

const ChatAlex = () => {
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
          message: "p",
          trigger: "2"
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
          ]
        },
        {
          id: "4",
          message: "pinjem duit dong",
          trigger: "5"
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
          ]
        },
        {
          id: "6",
          message: "iye, kalo lagi ada duit",
          trigger: "7"
        },
        {
          id: "7",
          message: "ini kan akhir bulan bre",
          trigger: "8"
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
          ]
        },
        {
          id: "9",
          message: "lo kan gajian di akhir bulan",
          trigger: "10"
        },
        {
          id: "10",
          message: "Ayolah bre, temen lo nih",
          trigger: "11"
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
          ]
        },
        {
          id: "12",
          message: "Halah, temen tai",
          end: true
        },
        {
          id: "13",
          message: "Oke, thanks bre",
          end: true
        },
      ]}
      {...config}
    />
  )
}

export default ChatAlex;
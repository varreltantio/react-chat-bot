import React from "react";
import ChatBot from "react-simple-chatbot";
import swal from "sweetalert";

import "./Chat.css";

import Success from "../../assets/citra-success.jpg";
import Failed from "../../assets/citra-failed.jpg";

const config = {
  headerTitle: "Citra",
  hideBotAvatar: true,
  hideUserAvatar: true
};

const ChatCitra = () => {
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
          message: "Halo Bam",
          trigger: "2"
        },
        {
          id: "2",
          message: "Apa kabar?",
          trigger: "3"
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
          ]
        },
        {
          id: "4",
          message: "Baik juga",
          trigger: "5"
        },
        {
          id: "5",
          message: "Sibuk apa sekarang",
          trigger: "6"
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
          ]
        },
        {
          id: "7",
          message: "Aku boleh curhat gk?",
          trigger: "8"
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
          ]
        },
        {
          id: "9",
          message: "oh, makasih ya bam.",
          end: true
        },
        {
          id: "10",
          message: "Aku lagi bingung nih bam",
          trigger: "11"
        },
        {
          id: "11",
          message: "Lagi banyak masalah juga",
          trigger: "12"
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
          ]
        },
        {
          id: "13",
          message: "... :)",
          end: true
        },
        {
          id: "14",
          message: "Makasih ya bam udah mau dengerin",
          end: true
        },
      ]}
      {...config}
    />
  )
}

export default ChatCitra;
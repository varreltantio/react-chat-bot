import Arrow from "../../../assets/arrow.png";

const handleSideBar = () => {
  let app = document.getElementById("app__container");
  app.classList.remove("is_message_open");
  app.classList.toggle("is_sidebar_open");
}

const handleLogout = () => {
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

export default handleLogout;
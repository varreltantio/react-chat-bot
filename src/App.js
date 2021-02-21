import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import SideBar from "./components/SideBar/SideBar";

import ChatRini from "./components/ChatBot/ChatRini";
import ChatCitra from "./components/ChatBot/ChatCitra";
import ChatAlex from "./components/ChatBot/ChatAlex";

import Join from "./components/Join/Join";

import "./App.css";

const App = () =>  {
  const [rini, setRini] = useState({open: false, wrong: 0, point: 0, success: false});
  const [riniMessages, setRiniMessages] = useState([]);
  const [citra, setCitra] = useState({open: false, wrong: 0, point: 0, success: false});
  const [citraMessages, setCitraMessages] = useState([]);
  const [alex, setAlex] = useState({open: false, wrong: 0, point: 0, success: false});
  const [alexMessages, setAlexMessages] = useState([]);

  const handleChat = (value) => {
    if (value.name === "Rini") {    
      setRini({open: true, wrong: value.wrong, point: value.point ? value.point : 0, success: value.success});
      setRiniMessages(value.messages);  
    }
    if (value.name === "Citra") {
      setCitra({open: true, wrong: value.wrong, point: value.point ? value.point : 0, success: value.success});
      setCitraMessages(value.messages); 
    }
    if (value.name === "Alex") {
      setAlex({open: true, wrong: value.wrong, point: value.point ? value.point : 0, success: value.success});
      setAlexMessages(value.messages); 
    }
  }

  return (
    <div className="app">
      <div className="app__container" id="app__container">
        <Router>
          <SideBar rini={rini} citra={citra} alex={alex} handleChat={handleChat} />
          <Route path="/" exact component={Join} />
          <Route path="/chat/rini" exact component={() => <ChatRini handleChat={handleChat} messages={riniMessages} wrong={rini.wrong} />}/>
          <Route path="/chat/citra" exact component={() => <ChatCitra handleChat={handleChat} messages={citraMessages} wrong={citra.wrong} />} />
          <Route path="/chat/alex" exact component={() => <ChatAlex handleChat={handleChat} messages={alexMessages} wrong={alex.wrong} />} />
        </Router>
      </div>
    </div>
  )
}

export default App;
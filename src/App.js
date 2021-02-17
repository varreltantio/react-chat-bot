import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import SideBar from "./components/SideBar/SideBar";

import ChatRini from "./components/ChatBot/ChatRini";
import ChatCitra from "./components/ChatBot/ChatCitra";
import ChatAlex from "./components/ChatBot/ChatAlex";

import Join from "./components/Join/Join";

import "./App.css";

const App = () =>  {
  return (
    <div className="app">
      <div className="app__container" id="app__container">
        <Router>
          <SideBar />
          <Route path="/" exact component={Join} />
          <Route path="/chat/rini" exact component={ChatRini} />
          <Route path="/chat/citra" exact component={ChatCitra} />
          <Route path="/chat/alex" exact component={ChatAlex} />
        </Router>
      </div>
    </div>
  )
}

export default App;
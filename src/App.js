import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./services/PrivateRoute";
import { database } from "./firebase";

import { AuthProvider } from "./contexts/AuthContext";
import { ProfileProvider } from "./contexts/ProfileContext";

import SideBar from "./components/SideBar/SideBar";

import Chat from "./components/ChatBot/Chat";
import Home from "./components/Home/Home";
import Join from "./components/Join/Join";

import "./App.css";

const App = () => {
  const [game, setGame] = useState([]);

  const handleGame = (id) => {
    const ref = database.ref(`games/${id}`);

    ref.on("value", (snapshot) => {
      setGame(snapshot.val());
    });

    return () => ref.off;
  };

  return (
    <div className="app">
      <div className="app__container" id="app__container">
        <AuthProvider>
          <Router>
            <Route path="/join" component={Join} />
            <ProfileProvider>
              <PrivateRoute
                path={["/", "/chat"]}
                component={() => <SideBar handleGame={handleGame} />}
              />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute
                path="/chat/:id"
                component={() => <Chat game={game} handleGame={handleGame} />}
              />
            </ProfileProvider>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
};

export default App;

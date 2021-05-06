import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "./Join.css";
import People from "./People";
import Font from "./Font";

export default function Join() {
  const { loginWithGoogle } = useAuth();

  const history = useHistory();

  async function handleLoginWithGoogle(e) {
    e.preventDefault();

    try {
      await loginWithGoogle();
      history.push("/");
    } catch {
      console.log("Error");
    }
  }

  return (
    <div className="join">
      <People />
      <Font handleLogin={handleLoginWithGoogle} />
    </div>
  );
}

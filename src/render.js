import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updNewPostText={updNewPostText} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

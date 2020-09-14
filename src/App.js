import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
  console.log(props.state.dialogsData);
  console.log(props.state.postsData);
  console.log(props.state.messagessData);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogData={props.state.messagePage.dialogsData}
                messageData={props.state.messagePage.messagesData}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                postData={props.state.profilePage.postsData}
                addPost={props.addPost}
                newPostText={props.state.profilePage.newPostText}
                updNewPostText={props.updNewPostText}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

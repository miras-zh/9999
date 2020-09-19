import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => <Dialogs messagePage={props.state.messagePage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              newPostText={props.state.profilePage.newPostText}
              updNewPostText={props.updNewPostText}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;

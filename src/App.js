import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile";
import Users from "./components/users/users";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => <DialogsContainer  />}
        />
        <Route path="/profile" render={() => <Profile  />} />
        <Route path="/users" render={() => <Users  />} />
      </div>
    </div>
  );
};

export default App;

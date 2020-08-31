import React from "react";
import s from "./Nvb.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="./../Profile/Profile.jsx" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="./../Dialogs/Dialogs.jsx" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <a>Main Content</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;

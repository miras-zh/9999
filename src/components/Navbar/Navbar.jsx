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
        <NavLink to="./../MainContent" activeClassName={s.active}>
        Main Content
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="./../Music" activeClassName={s.active}>
        Music
        </NavLink>
      </div>
      <div className={s.item}>
      <NavLink to="./../Settings" activeClassName={s.active}>
        Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

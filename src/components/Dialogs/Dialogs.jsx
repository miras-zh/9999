import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./Dialog-item/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
 
  let dialogsEl = props.dialogData.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesEl = props.messagesData.map((m) => {
    return <Message message={m.messages} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsEl}</div>
      <div className={s.messages}>{messagesEl}</div>
    </div>
  );
};

export default Dialogs;

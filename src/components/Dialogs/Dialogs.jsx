import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./Dialog-item/DialogItem";
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogData = [
    { id: 1, name: "Stalone" },
    { id: 2, name: "Gena" },
    { id: 3, name: "Xaker" },
    { id: 4, name: "Ronaldo" },
    { id: 5, name: "London" },
    { id: 6, name: "Berlin" },
  ];

  let messagesData = [
    { id: 1, messages: "Hi" },
    { id: 2, messages: "How are you?" },
    { id: 3, messages: "Bye Bye!" },
  ];

  let dialogsEl = dialogData.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesEl = messagesData.map((m) => {
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

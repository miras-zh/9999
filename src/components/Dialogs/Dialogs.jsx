import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./Dialog-item/DialogItem";
import Message from "./Message/Message";
import {
  actionMCreatorAddMessage,
  actionMUpdNewMessageText,
} from "./../../redux/message-reducer";

const Dialogs = (props) => {
  let dialogsEl = props.store.dialogData.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesEl = props.store.messageData.map((m) => {
    return <Message message={m.messages} />;
  });

  let newMessageElement = React.createRef();

  let addMessage = () => {
    if (newMessageElement.current.value !== "") {
      props.dispatch(actionMCreatorAddMessage());
      newMessageElement.current.value = "";
    } else {
      alert("Type text PLEASE");
    }
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(actionMUpdNewMessageText(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsEl}</div>
      <div className={s.messages}>
        <div className={s.sendMessage}>
          <textarea
            placeholder="Enter Your Message"
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageText}
          />
          <button onClick={addMessage}>Send Message</button>
        </div>
        {messagesEl}
      </div>
    </div>
  );
};

export default Dialogs;

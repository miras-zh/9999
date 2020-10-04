import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog-item/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsEl = props.messagePage.dialogData.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesEl = props.messagePage.messageData.map((m) => {
    return <Message message={m.messages} />;
  });

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    if (newMessageElement.current.value !== "") {
      props.addMessage();
      newMessageElement.current.value = "";
    } else {
      alert("Type text PLEASE");
    }
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updNewMessageText(text);
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
          <button onClick={onAddMessage}>Send Message</button>
        </div>
        {messagesEl}
      </div>
    </div>
  );
};

export default Dialogs;

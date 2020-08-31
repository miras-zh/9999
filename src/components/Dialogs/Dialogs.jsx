import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Leonardo Di Kaprio</div>
        <div className={s.dialog}>Donald Tramp</div>
        <div className={s.dialog}>Silvester Stalone</div>
        <div className={s.dialog}>Arnold Schwarcnegr</div>
        <div className={s.dialog}>Mark Cukerberg</div>
        <div className={s.dialog}>Bill Geyts</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>YOYYY!!!</div>
      </div>
    </div>
  );
};

export default Dialogs;

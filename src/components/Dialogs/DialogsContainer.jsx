import React from "react";
import Dialogs from "./Dialogs";
import DialogItem from "./Dialog-item/DialogItem";
import {
  actionMCreatorAddMessage,
  actionMUpdNewMessageText,
} from "../../redux/message-reducer";
import StoreContext from './StoreContext';

const DialogsContainer = () => {
  let onAddMessage = () => {
    props.store.dispatch(actionMCreatorAddMessage());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(actionMUpdNewMessageText(text));
  };

  return (
    <Dialogs
      updNewMessageText={onMessageChange}
      addMessage={onAddMessage}
      messagePage={props.store.getState().messagePage}
    />
  );
};

export default DialogsContainer;

import React from "react";
import Dialogs from "./Dialogs";
import {
  actionMCreatorAddMessage,
  actionMUpdNewMessageText,
} from "../../redux/message-reducer";
import StoreContext from "./../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let onAddMessage = () => {
          store.dispatch(actionMCreatorAddMessage());
        };

        let onMessageChange = (text) => {
          store.dispatch(actionMUpdNewMessageText(text));
        };

        return (
          <Dialogs
            updNewMessageText={onMessageChange}
            addMessage={onAddMessage}
            messagePage={store.getState().messagePage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

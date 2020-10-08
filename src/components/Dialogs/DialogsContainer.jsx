import React from "react";
import Dialogs from "./Dialogs";
import DialogItem from "./Dialog-item/DialogItem";
import {
  actionMCreatorAddMessage,
  actionMUpdNewMessageText,
} from "../../redux/message-reducer";
import { connect } from "react-redux";


let mapStateToProps = (state)=>{
  return {
    messagePage: state.messagePage
  }

}
let mapDispatchToProps = (dispatch)=>{
  return {
    updNewMessageText: (text)=>{
      dispatch(actionMUpdNewMessageText(text));
    },
    addMessage:()=>{
      dispatch(actionMCreatorAddMessage());
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const messageReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 5,
      messages: state.newMessageText,
    };
    state.messageData.push(newMessage);
    state.newMessageText = "";
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newTextM;
  }

  return state;
};

export default messageReducer;

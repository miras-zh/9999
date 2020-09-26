const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const messageReducer = (state, action) => {
  switch(action.type){
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        messages: state.newMessageText,
      };
      state.messageData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newTextM;
      return state;
    default:
      return state;
  }
};

export const actionMCreatorAddMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const actionMUpdNewMessageText = (textM) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newTextM: textM,
  };
};


export default messageReducer;

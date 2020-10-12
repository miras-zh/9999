const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, messages: "Hi, my Frend!", likeS: 10 },
    { id: 2, messages: "it is my First post", likeS: 55 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        messages: state.newPostText,
        likeS: 0,
      };
      let stateCopy = { ...state };
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const actionCreatorAddPost = () => {
  return {
    type: ADD_POST,
  };
};

export const actionCreatorUpdNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;

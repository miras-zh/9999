const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  if (action.type === "ADD-POST") {
    let newPost = {
      id: 5,
      messages: state.newPostText,
      likeS: 0,
    };
    state.postData.push(newPost);
    state.newPostText = "";
  } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    state.newPostText = action.newText;
  }

  return state;
};

export default profileReducer;

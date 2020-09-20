const ADD_POST ='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, messages: "Hi, my Frend!", likeS: 10 },
        { id: 2, messages: "it is my First post", likeS: 55 },
      ],
      newPostText: "",
    },
    messagePage: {
      messageData: [
        { id: 1, messages: "Hi" },
        { id: 2, messages: "How are you?" },
        { id: 3, messages: "Bye Bye!" },
      ],
      dialogData: [
        { id: 1, name: "Stalone" },
        { id: 2, name: "Gena" },
        { id: 3, name: "Xaker" },
        { id: 4, name: "Ronaldo" },
        { id: 5, name: "London" },
        { id: 6, name: "Berlin" },
      ],
      newMessageText:""
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state change");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action){
    console.log('dispatch')
      if(action.type === "ADD-POST"){
        let newPost = {
          id: 5,
          messages: this._state.profilePage.newPostText,
          likeS: 0,
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
      }else if(action.type === "UPDATE-NEW-POST-TEXT"){
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
      }
  },
  dispatchMessage(action){
    if(action.type === ADD_MESSAGE){
      debugger;
      let newMessage = {
        id:5,
        messages:this._state.messagePage.newMessageText
      }
      debugger;
      this._state.messagePage.messageData.push(newMessage);
      this._callSubscriber(this._state);
      this._state.messagePage.newMessageText = "";
    }else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
      this._state.messagePage.newMessageText = action.newTextM;
      this._callSubscriber(this._state);
    }
  }
};

export const actionCreatorAddPost = () => {
  return {
    type:ADD_POST
  }
}

export const actionCreatorUpdNewPostText = (text) => {
  return {
    type:UPDATE_NEW_POST_TEXT, 
    newText: text
  }
}

export const actionMCreatorAddMessage = ()=>{
  return {
    type: ADD_MESSAGE
  }
}

export const actionMUpdNewMessageText = (textM)=>{
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newTextM:textM
  }
}

export default store;
window.store = store;

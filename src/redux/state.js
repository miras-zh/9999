import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

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
      newMessageText: "",
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
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._callSubscriber(this._state);
  },
  dispatchMessage(action) {
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._callSubscriber(this._state);
  },
};


export default store;
window.store = store;

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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state change");
  },
  addPost() {
    let newPost = {
      id: 5,
      messages: this._state.profilePage.newPostText,
      likeS: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;

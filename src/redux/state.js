let rerenderEntireTree = () => {
  console.log("state change");
};

let state = {
  profilePage: {
    postsData: [
      { id: 1, messages: "Hi, my Frend!", likeS: 10 },
      { id: 2, messages: "it is my First post", likeS: 55 },
    ],
    newPostText: "",
  },
  messagePage: {
    messagesData: [
      { id: 1, messages: "Hi" },
      { id: 2, messages: "How are you?" },
      { id: 3, messages: "Bye Bye!" },
    ],
    dialogsData: [
      { id: 1, name: "Stalone" },
      { id: 2, name: "Gena" },
      { id: 3, name: "Xaker" },
      { id: 4, name: "Ronaldo" },
      { id: 5, name: "London" },
      { id: 6, name: "Berlin" },
    ],
  },
  sidebar: {},
};

window.state = state;

export let addPost = () => {
  let newPost = { id: 5, messages: state.profilePage.newPostText, likeS: 0 };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree();
};

export let updNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;

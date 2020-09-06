import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
  { id: 1, messages: "Hi, my Frend!", likeS: 10 },
  { id: 2, messages: "it is my First post", likeS: 55 },
  { id: 3, messages: "end Posts", likeS: 65 },
  { id: 3, messages: "end Posts", likeS: 65 },
  { id: 3, messages: "end Posts", likeS: 65 },
  { id: 3, messages: "end Posts", likeS: 65 },
  { id: 3, messages: "end Posts", likeS: 65 },
  { id: 3, messages: "end Posts", likeS: 65 },
  { id: 3, messages: "end Posts", likeS: 65 },
  { id: 3, messages: "end Posts", likeS: 65 },
  { id: 3, messages: "end Posts", likeS: 65 },
];

let dialogData = [
  { id: 1, name: "Stalone" },
  { id: 2, name: "Gena" },
  { id: 3, name: "Xaker" },
  { id: 4, name: "Ronaldo" },
  { id: 5, name: "London" },
  { id: 6, name: "Berlin" },
];

let messagesData = [
  { id: 1, messages: "Hi" },
  { id: 2, messages: "How are you?" },
  { id: 3, messages: "Bye Bye!" },
];


ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogData={dialogData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

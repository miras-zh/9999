import React from "react";
import MyPosts from "./MyPosts";
import {
  actionCreatorAddPost,
  actionCreatorUpdNewPostText,
} from "./../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(actionCreatorAddPost());
  };

  let onPostChange = (text) => {
    props.store.dispatch(actionCreatorUpdNewPostText(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postData={props.store.getState().profilePage.postData}
    />
  );
};

export default MyPostsContainer;

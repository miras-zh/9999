import React from "react";
import MyPosts from "./MyPosts";
import {
  actionCreatorAddPost,
  actionCreatorUpdNewPostText,
} from "./../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
   let addPost = () => {
    props.dispatch(actionCreatorAddPost());
  };

  let onPostChange = (text) => {
    props.dispatch(actionCreatorUpdNewPostText(text));
  };

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost}>
  );
};

export default MyPostsContainer;

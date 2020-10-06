import React from "react";
import MyPosts from "./MyPosts";
import {
  actionCreatorAddPost,
  actionCreatorUpdNewPostText,
} from "./../../../redux/profile-reducer";
import StoreContext from './StoreContext';

const MyPostsContainer = () => {
  
  return (
    <StoreContext.Consumer>{
    (store)=>{

      let state = store.getState();

      let addPost = () => {
        store.dispatch(actionCreatorAddPost());
      };
    
      let onPostChange = (text) => {
        store.dispatch(actionCreatorUpdNewPostText(text));
      };

    return <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postData={store.getState().profilePage.postData}
    />}
  }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;

import React from "react";
import MyPosts from "./MyPosts";
import {
  actionCreatorAddPost,
  actionCreatorUpdNewPostText,
} from "./../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
  return {
    postData: state.profilePage.postData
  }

}
let mapDispatchToProps = (dispatch)=>{
  return {
    addPost: ()=>{
      dispatch(actionCreatorAddPost());
    },
    updateNewPostText:(text)=>{
      dispatch(actionCreatorUpdNewPostText(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

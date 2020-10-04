import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  actionCreatorAddPost,
  actionCreatorUpdNewPostText,
} from "./../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsEl = props.postData.map((p) => {
    return <Post message={p.messages} likeCount={p.likeS} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <h2>My Post</h2>
      <div>
        New Post
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <div className={s.btn}>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsEl}</div>
    </div>
  );
};

export default MyPosts;

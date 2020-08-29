import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Post
      <div>
        New pOst
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, my Frend!" likeCount="10" />
        <Post message="it is my First post" likeCount="55" />
      </div>
    </div>
  );
};

export default MyPosts;

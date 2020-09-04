import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postData = [
    { id: 1, messages: "Hi, my Frend!", likeS: 10 },
    { id: 2, messages: "it is my First post", likeS: 55 },
    { id: 3, messages: "end Posts", likeS: 65 },
  ];

  let postsEl = postData.map((p) => {
    return <Post message={p.messages} likeCount={p.likeS} />;
  });

  return (
    <div>
      <h2>My Post</h2>
      <div>
        New Post
        <textarea></textarea>
        <div className={s.btn}>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsEl}</div>
    </div>
  );
};

export default MyPosts;

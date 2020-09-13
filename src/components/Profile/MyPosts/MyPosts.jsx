import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsEl = props.postData.map((p) => {
    return <Post message={p.messages} likeCount={p.likeS} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    debugger;
    let textt = newPostElement.current.value; //ссылается на нативный элемент
    props.addPost(textt);
    newPostElement.current.value = "";
  };

  return (
    <div>
      <h2>My Post</h2>
      <div>
        New Post
        <textarea ref={newPostElement}></textarea>
        <div className={s.btn}>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsEl}</div>
    </div>
  );
};

export default MyPosts;

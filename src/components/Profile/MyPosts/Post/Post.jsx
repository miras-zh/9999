import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLqqkUz42ZdSd1FbK6-vLWoRMH4oHzwHja4dtwD7Mgi9kLXYUv1Aa-CIvXS4piLB3USia5OEFkbQS5mgvgvq6uncG9VUD9gNX9Rg&usqp=CAU&ec=45695924" />
      post #1
      <div className={s.like}>
        <img src="https://pngimg.com/uploads/like/like_PNG71.png" alt="" />
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;

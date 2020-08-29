import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  console.log(props.message);
  return (
    <div className={s.item}>
      <div className={s.post_ava_message}>
        <div className={s.item_post_ava}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLqqkUz42ZdSd1FbK6-vLWoRMH4oHzwHja4dtwD7Mgi9kLXYUv1Aa-CIvXS4piLB3USia5OEFkbQS5mgvgvq6uncG9VUD9gNX9Rg&usqp=CAU&ec=45695924" />
        </div>
        <div className={s.message}>{props.message}</div>
      </div>
      <div className={s.like}>
        <span className={s.like_count}>{props.likeCount}</span>
        <img src="https://pngimg.com/uploads/like/like_PNG71.png" alt="" />
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;

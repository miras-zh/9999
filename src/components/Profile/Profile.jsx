import React from "react";
import s from "./Prf.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://lh3.googleusercontent.com/SIQH47SpD0_1ava4sAYRz-_mCNFToC2Xv-Zr2lODCjbvm2ZKwps6mzbObgp_jUNTEg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0fa71PWB97dEE_i-Ov2AwofvqMIKAfr0dew&usqp=CAU"
          alt=""
        />
      </div>
      <MyPosts/>
    </div>
  );
};

export default Profile;

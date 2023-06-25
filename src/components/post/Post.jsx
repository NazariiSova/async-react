import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Post.scss";
import fetchUserByID from "../api/api.jsx";

const Post = ({ title, body, userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [modal, setModal] = useState(false);
  const dataUser = 0;

  const handleButtonClick = async () => {
    if (modal === false) {
      const user = await fetchUserByID(userId);
      setUserInfo(user[0]);
      console.log(user);
    }
    setModal(!modal);
  };

  return (
    <div className="Post__container">
      <div className="Post__box">
        <div className="Post__title">{title}</div>
        <div className="Post__description">{body}</div>
        <div className="Post__button" onClick={handleButtonClick}>
          get info
        </div>
        {modal && <div className="Post__modal">{userInfo.name}</div>}
      </div>
    </div>
  );
};
export default Post;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header/Header.jsx";
import Post from "./components/post/Post.jsx";
import Footer from "./components/footer/Footer.jsx";
import {fetchPost} from "./components/api/api.jsx"
import "./App.scss";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postIndex, setPostIndex] = useState(0);
   const [arrayPosts, setArrayPost] = useState([]);

  useEffect(() => {
    fetchPost(setPosts);
  }, []);
 

 

  const handreClick = () => {
    setPostIndex(postIndex + 1);
    console.log(posts);
    setArrayPost([...arrayPosts, posts[postIndex]]);
  };

  return (
    <div className="App__container">
      <Header />
      <div className="App__body">
        <div className="App__post">
          {arrayPosts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} userId={post.userId}/>
          ))}
        </div>
      </div>
      <div className="App__button-container">
        <div className="App__button" onClick={handreClick}>
          get some post
        </div>
      </div>

      <div className="App__footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;

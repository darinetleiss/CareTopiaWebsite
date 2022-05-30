import "./homePage.css";
// import 'font-awesome/css/font-awesome.min.css';
import cover from "../../assets/testImages/cover 13.png";
import { FaRegComment, FaEllipsisH } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsEmojiLaughing } from "react-icons/bs";
import NavHomePage from "./NavHomePage";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from 'timeago.js'

export default function HomePage() {

  const [posts, sePosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:3003/api/shared/newsfeed/getTimeline");
      sePosts(res.data);
    };
    fetchPosts();
  },[posts]);

 

  return (
    <div>
      <NavHomePage />
      <section className="main">
        <div className="wrapperHome">
          <div className="left-col">

            {posts.length > 0 && posts.map((e) => (<div className="post">
              <div className="info">
                <div className="user">
                  <div className="profile-pic">
                    <img src={e.postOwner.picture} alt=" " />
                  </div>
                  <p className="username">{e.postOwner.username}</p>
                </div>
                <FaEllipsisH className="options" />
               </div>
              <img src={e.picture} className="post-image" alt="" />
              <div className="post-content">
                <div className="reaction-wrapper">
                  <AiFillHeart className="icon like" />
                  <FaRegComment className="icon" />
                </div>
                <p className="likes">{e.likes.length}</p>
                <p className="description">
                  <span>{e.postOwner.username}</span>{e.description}
                </p>
                <p className="post-time">{format(e.createdAt)}</p>
              </div>
              <hr className="hrMenu"></hr>
              <div className="comment-wrapper">
                <BsEmojiLaughing className="icon" />
                <input 
                  type="text"
                  id="inpuhome"
                  className="comment-box"
                  placeholder="Add a comment"
                />
                <button className="comment-btn">post</button>
              </div>
            </div>))}
          
          </div>
        </div>
      </section>
    </div>
  );
}

import "./homePage.css";
// import 'font-awesome/css/font-awesome.min.css';
import cover from "../../assets/testImages/cover 13.png";
import logo from "../../assets/HomePage/CareTopia.png";
import { GrAddCircle } from "react-icons/gr";
import { BiHomeAlt, BiBell, BiDonateHeart } from "react-icons/bi";
import { FaRegComments , FaRegComment , FaEllipsisH} from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai";
import {BsEmojiLaughing} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";

export default function HomePage() {

 

  return (
    <div>
      <nav className="navbar">
        <div className="nav-wrapper">
          <img src={logo} className="brand-img" alt="" />
          <div className="nav-items">
            <BiHomeAlt className="icon home" />

            <FaRegComments className="icon" />
            <BiBell className="icon" />
            <GrAddCircle className="icon" />
            <BiDonateHeart className="icon" />
            
            <CgProfile className="icon user-profile" />
 
          </div>
        </div>
      </nav>
      <section className="main">
        <div className="wrapperHome">
          <div className="left-col">
            <div className="post">
              <div className="info">
                <div className="user">
                  <div className="profile-pic">
                    <img src={cover} alt=" " />
                  </div>
                  <p className="username">khaled</p>
                </div>
                <FaEllipsisH className="options" />
               </div>
              <img src={cover} className="post-image" alt="" />
              <div className="post-content">
                <div className="reaction-wrapper">
                <AiFillHeart className="icon like"     />
                <FaRegComment className="icon" />
                </div>
                <p className="likes">1,012</p>
                <p className="description">
                  <span>username</span>Lorem ipsum dolor sit amet, . Except eur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit ani m id est laborum.
                </p>
                <p className="post-time">2 minutes ago</p>
              </div>
              <div className="comment-wrapper">
              <BsEmojiLaughing className="icon" />
                <input
                  type="text"
                  className="comment-box"
                  placeholder="Add a comment"
                />
                <button className="comment-btn">post</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

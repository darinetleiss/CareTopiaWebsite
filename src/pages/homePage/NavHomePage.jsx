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
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import Notification from "./notification";



export default function NavHomePage(){
  const navigate = useNavigate();
    return(
        
        <>
        <nav className="navbar">
        <div className="nav-wrapper">
          <img src={logo} className="brand-img" alt="" />
          <div className="nav-items">
            <BiHomeAlt className="icon home"  />

            <FaRegComments className="icon" onClick={() => navigate("/chat")}/>
            {/* <BiBell className="icon" /> */}
            <Notification/>
            <GrAddCircle className="icon" onClick={() => navigate("/uploadfile")}/>
            <BiDonateHeart className="icon" />
            
            {/* <CgProfile className="icon user-profile" /> */}
            <Menu/>






          </div>
        </div>
      </nav>
        </>
    )
}
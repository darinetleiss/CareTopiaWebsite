import {CgProfile} from "react-icons/cg";
import {FiSettings} from "react-icons/fi";
import {BsCalendarPlus} from "react-icons/bs";
import {MdOutlineSwitchAccount} from "react-icons/md";
import {MdLogout} from "react-icons/md";
import { BiBell, BiDonateHeart } from "react-icons/bi";


import "./homePage.css";



export default function Notification(){
    return(
         
        <div className="dropdown">
        {/* <CgProfile className="icon user-profile" /> */}
        <BiBell className="icon" />
        <div class="dropdown-content">
              <a className="aMenu" href="#"><MdOutlineSwitchAccount className="icon" />Randa like your photo</a>
              <a className="aMenu" href="/settings"><MdOutlineSwitchAccount className="icon" />Sara liked your photo</a>
              <a className="aMenu" href="#"><MdOutlineSwitchAccount className="icon" />Ahmad like your photo</a>
              <a  className="aMenu" href="#"><MdOutlineSwitchAccount className="icon" />Nour Like your photo</a>
              <hr className="hrMenu"/>
              <a className="aMenu" href="/"><MdOutlineSwitchAccount className="icon" />Maroi commented: I like....</a>
            </div>
            </div>
 
    )
}
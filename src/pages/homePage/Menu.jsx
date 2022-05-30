import {CgProfile} from "react-icons/cg";
import {FiSettings} from "react-icons/fi";
import {BsCalendarPlus} from "react-icons/bs";
import {MdOutlineSwitchAccount} from "react-icons/md";
import {MdLogout} from "react-icons/md";


import "./homePage.css";



export default function Menu(){
    return(
         
        <div className="dropdown">
        <CgProfile className="icon user-profile" />
        <div className="dropdown-content">
              <a className="aMenu" href="#">  <CgProfile className="icon " />Profile</a>
              <a className="aMenu" href="/settings"><FiSettings className="icon" />Settings</a>
              <a className="aMenu" href="#"><MdOutlineSwitchAccount className="icon" />Volunteer Requests</a>
              <a  className="aMenu" href="#"><BsCalendarPlus className="icon" />Appointment Requests</a>
              <hr className="hrMenu"/>
               <a className="aMenu" href="/"><MdLogout className="icon" />Log out</a>
            </div>
            </div>
 
    )
}
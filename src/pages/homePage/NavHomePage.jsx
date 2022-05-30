import "./homePage.css";
import logo from "../../assets/HomePage/CareTopia.png";
import { GrAddCircle } from "react-icons/gr";
import { BiHomeAlt, BiBell, BiDonateHeart } from "react-icons/bi";
import { FaRegComments, FaRegComment, FaEllipsisH } from "react-icons/fa";
import Menu from "./Menu";

export default function NavHomePage() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <img src={logo} className="brand-img" alt="" />
          <div className="nav-items">
            <BiHomeAlt className="icon home" />
            <FaRegComments className="icon" />
            <BiBell className="icon" />
            <GrAddCircle className="icon" />
            <BiDonateHeart className="icon" />
            <Menu />
          </div>
        </div>
      </nav>
    </>
  );
}

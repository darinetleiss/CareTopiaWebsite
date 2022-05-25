import "./sideBar.css"
import {CgProfile} from "react-icons/cg";
import {RiLockPasswordLine} from "react-icons/ri";
import {BiHelpCircle} from "react-icons/bi"
import {VscChecklist} from "react-icons/vsc"
 
export default function sideBar() {

    return(
<body>
    <div className="nav-container4">
      <ul className="nav4">
        <li className="active4">
          <a href="#">
            
          <CgProfile className="icon-home4" />
             <span className="text4">Edit Profile</span>
          </a>
        </li>
        <li>
          <a href="#">

          <RiLockPasswordLine className="icon-user4" />
            <span className="text4">Change Password</span>
          </a>
        </li>
        <li>
          <a href="#">

              <VscChecklist className="icon-play4" />
             <span className="text4">T&C</span>
          </a>
        </li>
        <li>
          <a href="#">

          <BiHelpCircle className="icon-cogs4" />
            <span className="text4">Help</span>
          </a>
        </li>
        
        
      </ul>
    </div>
	{/* <script type="text/javascript">
		$("li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  }); 
  
	 </script>  */}
      </body>
    )
}
import { useState } from "react";
import ChangePassword from "../changePassword/changePassword";
import UpdateProfile  from "../updateProfile/updateProfile"
import Terms from "../Terms_Help/termsConditions"
import Help from "../Terms_Help/help";
import NavHomePage from "../homePage/NavHomePage";
import "./settings.css";
export default function Settings(){
    const [active,setActive] = useState("profile");



    return(
        <div>
 <NavHomePage/>
            <nav>
                <p  />
                <button className="btnSettings" onClick={() => setActive("profile")}>Update Profile</button>
                <p/>
                <button className="btnSettings"  onClick={() => setActive("password")}>Change Password</button>
                <p/>
                <button className="btnSettings"  onClick={() => setActive("terms")}>Terms & Conditions</button>
                <p/>
                <button className="btnSettings"  onClick={() => setActive("help")}>Help</button>
            </nav>
            
            <div className="divset">
                {active === "profile" && <UpdateProfile/>}
                {active === "password" && <ChangePassword/>}
                {active === "terms" && <Terms/>}
                {active === "help" && <Help/>}
            </div>
        </div>
    )
}

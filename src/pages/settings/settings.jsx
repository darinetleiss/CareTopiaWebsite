import { useState } from "react";
import ChangePassword from "../changePassword/changePassword";
import UpdateProfile  from "../updateProfile/updateProfile"
import Terms from "../Terms_Help/termsConditions"
import Help from "../Terms_Help/help";
import NavHomePage from "../homePage/NavHomePage";
export default function Settings(){
    const [active,setActive] = useState("profile");



    return(
        <div>
 <NavHomePage/>
            <nav>
                <p style={{paddingTop:150}}/>
                <button onClick={() => setActive("profile")}>Update Profile</button>
                <p/>
                <button onClick={() => setActive("password")}>Change Password</button>
                <p/>
                <button onClick={() => setActive("terms")}>Terms & Conditions</button>
                <p/>
                <button onClick={() => setActive("help")}>Help</button>
            </nav>
            <div>
                {active === "profile" && <UpdateProfile/>}
                {active === "password" && <ChangePassword/>}
                {active === "terms" && <Terms/>}
                {active === "help" && <Help/>}
            </div>
        </div>
    )
}

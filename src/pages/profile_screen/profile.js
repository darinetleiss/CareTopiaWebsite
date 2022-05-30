import React from 'react';
import pic2 from './Hdhut.blogspot.com (5).jpg';
import "./profile_screen.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import Navbar4 from './navbar/navbar4';
import NavHomePage from '../homePage/NavHomePage';

const Profile = () => {
  const navigate = useNavigate();
  const [ngoProfile, setNGOProfile] = useState({});
  useEffect(() => {
    const fetchNGOProfile = async () => {
      const res = await axios.get(
        "http://localhost:3003/api/ngo/profileScreen/getProfileInfo",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQxYmE0ZTgxMDQyMDU1ZDAxNDVmNSIsImlhdCI6MTY1MzkwMzIxOH0.X3WaCJPayeHoSCMzMfFdDGEQowCXnvhFb3mRMjZIix0",
          },
        }
      );
      setNGOProfile(res.data);
    };
    fetchNGOProfile();
  },[ngoProfile]);
  return (
    <div>
  <div>
   <NavHomePage />
      <div>
       <table>
      <tr>
        <td>
          <div className="circleimagex">
          <img src={ngoProfile.picture}alt='picture2'/>
          </div>
        </td>
        <td>
          <tr>
            <td>
            <div className="clickx">
      <button className="Addrequestx" onClick={() => navigate("/uploadfile")}>Add post</button>
    </div>
            </td>
            <td>
            <div className="clickxy">
      <button className="Editrequestx">Edit Profile</button>
    </div>
            </td>
            {/* <td>
            <button className="btn-nobgx">
                <i className="fa fa-cog"></i>
              </button>
            </td> */}
          </tr>

          {/* <tr>
            <td>
                <p className='volunteerx'>Volunter requests</p>
            </td>
            <td>
              <p>
              <Form className='switchx'>
        <Form.Check 
          type="switch"
            />
          </Form>
              </p>
            </td>
          </tr> */}
          <div className='flexch'>
          <div className='volunteer4x'>
          <p>Volunteer requests</p>
          </div>
          <div className='swicthiconm'>
          <i class="fa fa-toggle-on" aria-hidden="true"></i>
          </div>
          </div>

        </td>
        </tr>
    </table>
    </div>
        <div className='usernamex'>
        <p>{ngoProfile.username}</p>
        </div>
        <div className='descriptionx'>
            <p>{ngoProfile.description}</p>
        </div>
       <hr/>
        
        <div>
          <div className='body3x'>
              <div className='columnnl' >
                
                <button className='buttonx'>
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
                
                
                      <div className='postsx'>
                        <h5>Posts</h5>
                        </div>
                
              </div>
              </div>
       </div>
         <div className='body3x'>
      <table>
          <tr >
              <td>
             <img src={pic2}alt='picturd' className='image3x ' />
              </td>
              <td>
              
             <img src={pic2}alt='picturd' className='image4x ' />
              </td>
              <td>
             <img src={pic2}alt='picturd' className='image5x ' />
              </td>
          </tr>
          <tr >
              <td>
             <img src={pic2}alt='picturd' className='image3x ' />
              </td>
              <td>
              
             <img src={pic2}alt='picturd' className='image4x ' />
              </td>
              <td>
             <img src={pic2}alt='picturd' className='image5x ' />
              </td>
          </tr>
          <tr >
              <td>
             <img src={pic2}alt='picturd' className='image3x ' />
              </td>
              <td>
              
             <img src={pic2}alt='picturd' className='image4x ' />
              </td>
              <td>
             <img src={pic2}alt='picturd' className='image5x ' />
              </td>
          </tr>
      </table>
      </div>
      {/* <div className='sameline'>
        <div className='imagedec'>
        <img src="https://th.bing.com/th/id/OIP.ewQ01WGeLzMa22dxsZly7gHaFX?pid=ImgDet&rs=1" alt=""/>
        </div>
        <button>Add post</button>
        <button>Edit profile</button>
      </div> */}
     </div> 
     </div>
  )
}

export default Profile;

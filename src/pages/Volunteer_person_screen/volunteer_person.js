import React from 'react';
import "./volunteer_person.css"
import pic from './Hdhut.blogspot.com (5).jpg';
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Barnav from './bar/navbar';


export const VolunteerPerson = () => {
    const ID = useParams().ID;

    const [volunteerRequestDetails, setVolunteerRequetDetails] = useState({});
  useEffect(() => {
    const fetchVolunteerRequestDetails = async () => {
      const res = await axios.get(
        `http://localhost:3003/api/ngo/requests/getVolunteerRequestDetails/${ID}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQxYmE0ZTgxMDQyMDU1ZDAxNDVmNSIsImlhdCI6MTY1Mzc0NDM3N30.sXlytBA3b11haSu1g2OfStITWOP5RLwigBIiLao7r3U",
          },
        }
      );
      setVolunteerRequetDetails(res.data);
    };
    fetchVolunteerRequestDetails();
  },[ID, volunteerRequestDetails]);

  const acceptVolunteerRequest = async (e) => {
    e.preventDefault();
    try{
      await axios.patch(`http://localhost:3003/api/ngo/requests/acceptVolunteerRequest/${ID}`,
      {
        // headers: {
        //   Authorization:
        //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQxYmE0ZTgxMDQyMDU1ZDAxNDVmNSIsImlhdCI6MTY1Mzc0NDM3N30.sXlytBA3b11haSu1g2OfStITWOP5RLwigBIiLao7r3U",
        // },
      }).then((response) => {
        alert(response.data.message)
      })
    }catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message);
      }
    }
  } 

  const declineVolunteerRequest = async (e) => {
    e.preventDefault();
    try{
      await axios.delete(`http://localhost:3003/api/ngo/requests/declineVolunteerRequest/${ID}`,
      {
        // headers: {
        //   Authorization:
        //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQxYmE0ZTgxMDQyMDU1ZDAxNDVmNSIsImlhdCI6MTY1Mzc0NDM3N30.sXlytBA3b11haSu1g2OfStITWOP5RLwigBIiLao7r3U",
        // },
      }).then((response) => {
        alert(response.data.message)
      })
    }catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message);
      }
    }
  }

  return (
    <div>
    <Barnav/>
    <div className='body1'>
    <div className='container0' >
    {/* <div className="image">
        <img src={volunteerRequestDetails.requestOwner.picture}alt='image'/>
      </div> */}
    {/* <div className="button1p">
        <button onClick={acceptVolunteerRequest}>Accept</button>
        <button onClick={declineVolunteerRequest}>Decline</button>
      </div> */}
      <div>
         <form action="#">
        <div className="form first">
            <div className="details personal">
                {/* <span className="title">Personal Details</span> */}
                <div className="fields">
                        <div className="input-field1">
                            <label>First Name</label>
                            {/* <input type="text" placeholder="Enter your name" /> */
                            }
                            <div className='box4t' >
                            <div className='text1k' >
                            <p>{volunteerRequestDetails.firstname} </p>
                            </div>
                            </div>

                        </div>

                        <div className="input-field1">
                            <label>Last Name</label>
                            {/* <input type="text" placeholder="Last Name" required/> */}
                            <div className='box7t' >
                            <div className='text1k' >
                            <p>{volunteerRequestDetails.lastname}</p>
                            </div>
                            </div>
                        </div> 
                    <div className="input-field">
                        <label>Email</label>
                        <div className='box5t' >
                            <div className='text1k' >
                            <p>{volunteerRequestDetails.email} </p>
                            </div>
                            </div>
                    </div>

                    <div class="input-field">
                        <label>Phone Number</label>
                        {/* <input type="text" placeholder="Enter mobile number" required/> */}
                        <div className='box5t' >
                            <div className='text1k' >
                            <p>{volunteerRequestDetails.phonenumber}</p>
                            </div>
                            </div>
                    </div>


                    <div className="input-field">
                        <label>Why do you want to volunteer ?</label>
                        {/* <input type="text" placeholder="" required /> */}
                        <div className='box5t' >
                            <div className='text1k' >
                            <p>{volunteerRequestDetails.volunteerreason}</p>
                            </div>
                            </div>
                    </div>
                    <div className="input-field">
                        <label>Age</label>
                        {/* <input type="text" placeholder="" required/> */}
                        <div className='box5t' >
                            <div className='text1k' >
                            <p>{volunteerRequestDetails.personalinfo}</p>
                            </div>
                            </div>
                    </div>
                    <div className="input-field">
                        <label>Brief info about volunteer </label>
                        {/* <input type="text" placeholder="" required/> */}
                        <div className='box5t' >
                            <div className='text1k' >
                            <p>{volunteerRequestDetails.personalinfo}</p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            </div> 
    </form>
    <div className="button1p">
        <button onClick={acceptVolunteerRequest}>Accept</button>
        <button onClick={declineVolunteerRequest}>Decline</button>
      </div>
    </div>
</div>
</div>
</div>
  );
}
export default VolunteerPerson;

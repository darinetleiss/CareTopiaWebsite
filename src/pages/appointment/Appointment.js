import React from 'react';
import "./Appointment.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Barnav from '../Volunteer_person_screen/bar/navbar';
import Navbarapp from './navbarapp/navbarapp';


export const Appointment = () => {

    const ID = useParams().ID;
    const [appointmentRequestDetails, setAppointmentRequetDetails] = useState({});
  useEffect(() => {
    const fetchAppointmentRequestDetails = async () => {
      const res = await axios.get(
        `http://localhost:3003/api/ngo/requests/getAppointmentRequestDetails/${ID}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQxYmE0ZTgxMDQyMDU1ZDAxNDVmNSIsImlhdCI6MTY1MzkwMzIxOH0.X3WaCJPayeHoSCMzMfFdDGEQowCXnvhFb3mRMjZIix0",
          },
        }
      );
      setAppointmentRequetDetails(res.data);
    };
    fetchAppointmentRequestDetails();
  },[ID, appointmentRequestDetails]);

  const acceptAppointmentRequest = async (e) => {
    e.preventDefault();
    try{
      await axios.patch(`http://localhost:3003/api/ngo/requests/acceptAppointmentRequest/${ID}`,
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

  const declineAppointmentRequest = async (e) => {
    e.preventDefault();
    try{
      await axios.delete(`http://localhost:3003/api/ngo/requests/declineAppointmentRequest/${ID}`,
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
//       <div className='main_8'>
//     <div className='body1_8'>
//     <div className='container0_8'>
//         <div className='popu_header_8'>
//             <h3>Appointment Request</h3>
//             {/* <h3 className='close_8'>X</h3> */}
//         </div>
//         <table className='centertab_8'>
//             <div className='space_8'>
//             <tr>
//                 <td className='left_8'>
//                     First Name:
//                 </td>
//                 <div className='name_8'>
//                 <td>
//                     {appointmentRequestDetails.firstname}
//                 </td> 
//                 </div>
                
//             </tr>
//             </div>
//             <div className='space_8'>
//             <tr>
//                 <td className='left_8'>
//                     Last Name:
//                 </td>
//                 <div className='name_8'>
//                 <td>
//                 {appointmentRequestDetails.lastname}
//                 </td> 
//                 </div>
                
//             </tr>
//             </div>
//             <div className='space_8'>
//             <tr>
//                 <td className='left_8'>
//                     Email:
//                 </td>
//                 <div className='name_8'>
//                 <td>
//                 {appointmentRequestDetails.email}
//                 </td> 
//                 </div>
//             </tr>
//             </div>
//             <div className='space_8'>
//             <tr>
//                 <td className='left_8'>
//                     Phone Number:
//                 </td>
//                 <div className='name_8'>
//                 <td>
//                 {appointmentRequestDetails.phonenumber}
//                 </td> 
//                 </div>
                
//             </tr>
//             </div>
//             <div className='space_8'>
//             <tr>
//                 <td className='left_8'>
//                     Age:
//                 </td>
//                 <div className='name_8'>
//                 <td>
//                 {appointmentRequestDetails.age}
//                 </td> 
//                 </div>
                
//             </tr>
//             </div>
//             <div className='space_8'>
//             <tr>
//                 <td className='left_8'>
//                     Reason:
//                 </td>
//                 <div className='name_8'>
//                 <td>
//                 {appointmentRequestDetails.appointmentreason}
//                 </td> 
//                 </div>
                
//             </tr>
//             </div>
//             <div className='space_8'>
//             <tr>
//                 <td className='left_8'>
//                     Date Desired:
//                 </td>
//                 <div className='name_8'>
//                 <td>
//                     {appointmentRequestDetails.dateforappointment}
//                 </td> 
//                 </div>
                
//             </tr>
//             </div>
//         </table>
//     <div className="button1_8">
//         <button className="Accept1_8" onClick={acceptAppointmentRequest}>Accept</button>
//         <button className="Cancel1_8" onClick={declineAppointmentRequest}>Reject</button>
//       </div>
//       <div>
//          <form action="#">
//         <div className="form first_*">
//             <div className="details personal_8">
                        
//             </div>
//             </div> 
//     </form>
//     </div>
// </div>
// </div>
// </div>

<div>
    <Navbarapp/>
    <div className='body18'>
    <div className='container08' >
    {/* <div className="image">
        <img src={volunteerRequestDetails.requestOwner.picture}alt='image'/>
      </div> */}
    {/* <div className="button1p">
        <button onClick={acceptVolunteerRequest}>Accept</button>
        <button onClick={declineVolunteerRequest}>Decline</button>
      </div> */}
      <div>
         <form action="#">
        <div className="form first8">
            <div className="details personal8">
                {/* <span className="title">Personal Details</span> */}
                <div className="fields8">
                        <div className="input-field18">
                            <label>First Name</label>
                            {/* <input type="text" placeholder="Enter your name" /> */
                            }
                            <div className='box4t8' >
                            <div className='text1k8' >
                            <p>
                            {appointmentRequestDetails.firstname}
                            </p>
                            </div>
                            </div>

                        </div>

                        <div className="input-field18">
                            <label>Last Name</label>
                            {/* <input type="text" placeholder="Last Name" required/> */}
                            <div className='box7t8' >
                            <div className='text1k8' >
                            <p>
                            {appointmentRequestDetails.lastname}
                            </p>
                            </div>
                            </div>
                        </div> 
                    <div className="input-field8">
                        <label>Email</label>
                        <div className='box5t8' >
                            <div className='text1k8' >
                            <p>
                            {appointmentRequestDetails.email}
                            </p>
                            </div>
                            </div>
                    </div>

                    <div class="input-field8">
                        <label>Phone Number</label>
                        {/* <input type="text" placeholder="Enter mobile number" required/> */}
                        <div className='box5t8' >
                            <div className='text1k8' >
                            <p>
                            {appointmentRequestDetails.phonenumber}
                            </p>
                            </div>
                            </div>
                    </div>


                    <div className="input-field8">
                        <label>Age</label>
                        {/* <input type="text" placeholder="" required /> */}
                        <div className='box5t8' >
                            <div className='text1k8' >
                            <p>
                            {appointmentRequestDetails.age}
                            </p>
                            </div>
                            </div>
                    </div>
                    <div className="input-field8">
                        <label>Reason </label>
                        {/* <input type="text" placeholder="" required/> */}
                        <div className='box5t8' >
                            <div className='text1k8' >
                            <p>
                            {appointmentRequestDetails.appointmentreason}
                            </p>
                            </div>
                            </div>
                    </div>
                    <div className="input-field8">
                        <label>Date Desired</label>
                        {/* <input type="text" placeholder="" required/> */}
                        <div className='box5t8' >
                            <div className='text1k8' >
                            <p>
                            {appointmentRequestDetails.dateforappointment}
                            </p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            </div> 
    </form>
    <div className="button1p8">
        <button onClick={acceptAppointmentRequest}>Accept</button>
        <button onClick={declineAppointmentRequest}>Decline</button>
      </div>
    </div>
</div>
</div>
</div>


  );
}
export default Appointment;

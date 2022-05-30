import React from "react";
import "./volunteer.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar3 from "./navbar3/navbar3";

export const AppointmentScreen = () => {
  const navigate = useNavigate();
  const [volunteerRequests, setVolunteerRequets] = useState({});
  useEffect(() => {
    const fetchVolunteerRequest = async () => {
      const res = await axios.get(
        "http://localhost:3003/api/ngo/requests/getAppointmentRequests",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQxYmE0ZTgxMDQyMDU1ZDAxNDVmNSIsImlhdCI6MTY1MzkwMzIxOH0.X3WaCJPayeHoSCMzMfFdDGEQowCXnvhFb3mRMjZIix0",
          },
        }
      );
      setVolunteerRequets(res.data);
    };
    fetchVolunteerRequest();
  },[volunteerRequests]);

  const acceptAppointmentRequest = ID => async (e) => {
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

  const declineAppointmentRequest = ID => async (e) => {
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
    <div>
      <Navbar3/>
    <div className="body9l">
      <div className="containerl">
        {volunteerRequests.length > 0 && volunteerRequests.map((e) => (
          <><table className="centerl">
            <tr>
              <td>
                <div className="image1l">
                  <img src={e.requestOwner.picture} alt="image1l" />
                </div>
              </td>
              <td>
                <div className="username1l">
                  <p onClick={() => navigate(`/appointment/${e._id}`)}>{e.firstname} {e.lastname}</p>
                </div>
              </td>
              <td>
                <div className="button12l">
                  <button className="Acceptl" onClick={acceptAppointmentRequest(e._id)}>Accept</button>
                </div>
              </td>
              <td>
                <div className="button12l">
                  <button className="Cancell" onClick={declineAppointmentRequest(e._id)}>Decline</button>
                </div>
              </td>
            </tr>
          </table><div className="hrl">
              <hr />
            </div></>
        ))}

  
          
        {/* <div className="hrl">
          <hr />
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default AppointmentScreen;

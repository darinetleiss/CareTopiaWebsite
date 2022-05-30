import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages";
 import SignUp from "./pages/signUp/signUp";
import LogIn from "./pages/logIn/logIn";
import HomePage from "./pages/homePage/homePage";
import Settings from "./pages/settings/settings";
import Donate from "./pages/Donate/donate";
import Appointment from "./pages/appointment/Appointment";
import Messenger1 from "./pages/Chat/Chatapp/messenger";
import Profile from "./pages/profile_screen/profile";
import Uploadfile from "./pages/fileupload/fileupload";
import VolunteerPerson from "./pages/Volunteer_person_screen/volunteer_person";
import VolunteerScreen from "./pages/volunteer_screen/volunteer";
import AppointmentScreen from "./pages/volunteer_screen/appointment";

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} exact />
          <Route path="/homePage" element={<HomePage />} exact />
          <Route path="/logIn" element={<LogIn />} exact />
          <Route path="/signUp" element={<SignUp />} exact />
          <Route path="/settings" element={<Settings />} exact />
          <Route path="/donate" element={<Donate />} exact />
          {/* <Route path="/test" element={<Test />} exact /> */}

          <Route path="/appointment/:ID" element={<Appointment/>} />
          <Route path="/chat" element={<Messenger1/>}/>
          <Route path="/profile" element={<Profile/>} />
          {/* <Route path="/" element={<Navigate to ="/appointment/:ID"/>}/> */}
          <Route path="/uploadfile" element={<Uploadfile/>} />
          <Route path="/volunteer_person/:ID" element={<VolunteerPerson/>} />
          <Route path="/allVolunteers" element={<VolunteerScreen/>} />
          <Route path="/allAppointments" element={<AppointmentScreen/>} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages";
import Test from "./pages/signUp/test";
import SignUp from "./pages/signUp/signUp";
import LogIn from "./pages/logIn/logIn";
import HomePage from "./pages/homePage/homePage";
import { ChangePassword } from "./pages/changePassword/changePassword";
import UpdateProfile from "./pages/updateProfile/updateProfile";
import SideBar from "./pages/SideBar/SideBarNav";



// const Login = lazy(() => import("./pages/login"));
// const SignUp = lazy(() => import("./pages/Signup"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>




        <Route path="/SideBarNav" element={<SideBar/>} exact />

        <Route path="/updateProfile" element={<UpdateProfile/>} exact />

        <Route path="/homePage" element={<HomePage/>} exact />
        <Route path="/changePassword" element={<ChangePassword/>} exact />

          <Route path="/logIn" element={<LogIn/>} exact />
        <Route  path="/signUp" element={<SignUp/>} exact />
          <Route  path="/test" element={<Test/>} exact />
        <Route path={ROUTES.HOME} element={<Home/>} exact />
          </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

/*lazy allows us to split our huge
bundel into smaller ones 
so if 6mb is so much if we type 
lazy the user will only take 0.5mb
only the wanted page or feature will load
and to utulize the lazy function we must use suspense*/

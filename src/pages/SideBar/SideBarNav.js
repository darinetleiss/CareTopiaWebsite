import { Route, Router, useLocation } from "react-router";
import Sidebar from "./SideBar";
import Home from "../../components/SideBar/Home";
import Documents from "../../components/SideBar/Documents";
import Calender from "../../components/SideBar/Calender";
import Team from "../../components/SideBar/Team";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import SideBar from "./SideBar"

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;



export default function SideBarNav(){
    const location = useLocation();
    return(
        <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <SideBar location={location} key={location.pathname}>
            <Home exact path="/" component={Home} />
            <Team path="/team" component={Team} />
            <Calender path="/calender" component={Calender} />
            <Documents path="/documents" component={Documents} />
           </SideBar>
        </AnimatePresence>
      </Pages>
    </>
    )
}
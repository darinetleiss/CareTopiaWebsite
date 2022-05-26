import React, { useState } from "react";

//All the svg files
import Profile from "../../assets/SideBar/account.svg";
import Password from "../../assets/SideBar/lock.svg";
import TC from "../../assets/SideBar/TC.svg";
import Help from "../../assets/SideBar/help.svg";
 import styled from "styled-components";
import { NavLink } from "react-router-dom";
 
const ContainerSide = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid #fafafa;

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(0%);
    }
  }
`;

const ButtonSide = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: #fafafa;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color:#fafafa;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;
 
const SlickBar = styled.ul`
  color: #fafafa;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #Fafafa;

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const ItemSide = styled(NavLink)`
  text-decoration: none;
  color: var(--black);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--black);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(50%) contrast(0%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const TextSide = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;
 

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <ContainerSide>
      <ButtonSide clicked={click} onClick={() => handleClick()}>
        Click
      </ButtonSide>
      <SidebarContainer>
    
        <SlickBar clicked={click}>
          <ItemSide
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/"
          >
            <img src={Profile} alt="Profile" />
            <TextSide clicked={click}>Update Profile</TextSide>
          </ItemSide>
          <ItemSide
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/team"
          >
            <img src={Password} alt="Password" />
            <TextSide clicked={click}>Password</TextSide>
          </ItemSide>
          <ItemSide
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/calender"
          >
            <img src={TC} alt="TC" />
            <TextSide clicked={click}>T&C</TextSide>
          </ItemSide>
          <ItemSide
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/documents"
          >
            <img src={Help} alt="help" />
            <TextSide clicked={click}>Help</TextSide>
          </ItemSide>
        
        </SlickBar>
 


      </SidebarContainer>
    </ContainerSide>
  );
};

export default Sidebar;

import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#FAFAFA" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;


  @media screen and(max-width:1100px) {
    transition: 0.8s all ease;
    font-size:0.2rem;
    
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80 px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Logo = styled.img`
  position: absolute;
  left: 6.04%;
  right: 89.1%;
  top: 18%;
  bottom: 95.83%;
  width: 50px;
  height: 50px;
 
`;

export const NavLogo = styled(LinkRouter)`
color:#1B8DA6;
justify-self:flex-start;
cursor:pointer;
 display:flex;
align-items:center;
margin-left: 24px
font-weight:bold;
text-decoration:none;

padding-left:16px;

 right: 165px;
top: 78px;

  font-size: 28px;

  &:hover{
    text-decoration:none;
}

  @media screen and (max-width: 1000px) {
    padding-left:95px;
    font-size:24px;
   
  }

  @media screen and (max-width: 1100px) {
     font-size:20px;
    padding-left:75px;
  }


 
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 790px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 790px) {
    display: none;
    
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #1b8da6;
    text-decoration: none;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 790px) {
    display: none;
  }
  
`;

export const NavButtonLink = styled(LinkRouter)`
border-radius:50px;
background:#1B8DA6;
white-space:nowrap;
padding:10px 22px;
color:#fff;
font-size:60px
outline:none;
border:none;
cursor:pointer;
transtion:all 0.2s ease-in-out;
text-decoration:none;


&:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
    text-decoration:none;
}
`;

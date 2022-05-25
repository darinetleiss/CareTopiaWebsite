import React from "react";
import {
  TopBarContainer,
  Icon,
  CloseIcon,
  TopBarButtonWrap,
  TopBarLink,
  TopBarWrapper,
  ToBarRoute,
  TopBarMenu,
} from "./TopBarEelements";

const TopBar = ({ isOpen, toggle }) => {
  return (
    <TopBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopBarWrapper>
        <TopBarMenu>
          <TopBarLink to="about" onClick={toggle}>
            About
          </TopBarLink>
          <TopBarLink to="cases" onClick={toggle}>
            Cases
          </TopBarLink>{" "}
          <TopBarLink to="Features" onClick={toggle}>
            Services
          </TopBarLink>
          <TopBarLink to="singup" onClick={toggle}>
            SignUp
          </TopBarLink>
        </TopBarMenu>
        <TopBarButtonWrap>
          <ToBarRoute to="/singin">Sign In</ToBarRoute>
        </TopBarButtonWrap>
      </TopBarWrapper>
    </TopBarContainer>
  );
};

export default TopBar;

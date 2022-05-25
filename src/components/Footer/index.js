import React from "react";
import { animateScroll as scroll } from "react-scroll";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTtitle,
  FooterLinksContainer,
  FooterLinksWraper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWraper>
            <FooterLinkItems>
              <FooterLinkTtitle>About us</FooterLinkTtitle>
              <FooterLink to="/SignIn">How it works</FooterLink>
              <FooterLink to="/SignIn">Terms of service</FooterLink>
              <FooterLink to="/SignIn">Support</FooterLink>
              <FooterLink to="/SignIn">Policy</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTtitle>About us</FooterLinkTtitle>
              <FooterLink to="/SignIn">How it works</FooterLink>
              <FooterLink to="/SignIn">Terms of service</FooterLink>
              <FooterLink to="/SignIn">Support</FooterLink>
              <FooterLink to="/SignIn">Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWraper>

          <FooterLinksWraper>
            <FooterLinkItems>
              <FooterLinkTtitle>About us</FooterLinkTtitle>
              <FooterLink to="/SignIn">How it works</FooterLink>
              <FooterLink to="/SignIn">Terms of service</FooterLink>
              <FooterLink to="/SignIn">Support</FooterLink>
              <FooterLink to="/SignIn">Policy</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTtitle>About us</FooterLinkTtitle>
              <FooterLink to="/SignIn">How it works</FooterLink>
              <FooterLink to="/SignIn">Terms of service</FooterLink>
              <FooterLink to="/SignIn">Support</FooterLink>
              <FooterLink to="/SignIn">Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWraper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Caretopia</SocialLogo>
            <WebsiteRights>
              Caretopia © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/darinetleiss_"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

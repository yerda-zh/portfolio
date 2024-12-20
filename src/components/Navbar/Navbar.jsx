import {
  Nav,
  PortfolioDiv,
  Ul,
  SocialIconsContainer,
  SocialIcon,
  GithubIcon,
  DiscordIcon,
  LogoLightning,
  SmallScreenContainer,
  SmallScreen,
  CloseMenu,
  SmallScreenLinks,
  MenuIcon,
  LinkedInIcon
} from "./navbar.styles";
import { useState } from 'react';

import '../../animations/animation.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Nav>
      <PortfolioDiv>
        <LogoLightning />
        <p>Portfolio</p>
      </PortfolioDiv>
      <Ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#technologies">Tech</a></li>
        <li><a href="#contact">Contact</a></li>
      </Ul>
      <SocialIconsContainer>
        <SocialIcon href="https://github.com/yerda-zh">
          <GithubIcon />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/yerdaulet-zh/">
          <LinkedInIcon />
        </SocialIcon>
        <SocialIcon href="https://discordapp.com/users/1102910351189753898">
          <DiscordIcon />
        </SocialIcon>
      </SocialIconsContainer>

      <SmallScreenContainer>
        <MenuIcon onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <SmallScreen className={`${toggleMenu ? 'navbar-slide-left' : ''}`}>
            <CloseMenu onClick={()=> setToggleMenu(false)}/>
            <SmallScreenLinks>
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
              <li><a href="#technologies" onClick={() => setToggleMenu(false)}>Tech</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </SmallScreenLinks>
          </SmallScreen>
        )}
      </SmallScreenContainer>
    </Nav>
  );
}

export default Navbar;
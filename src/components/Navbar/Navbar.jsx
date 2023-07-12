import {
  Nav,
  PortfolioDiv,
  Ul,
  SocialIconsContainer,
  SocialIcon,
  GithubIcon,
  UpworkIcon,
  DiscordIcon,
  LogoLightning,
  SmallScreenContainer,
  SmallScreen,
  CloseMenu,
  SmallScreenLinks,
  MenuIcon
} from "./navbar.styles";
import { useState } from 'react';

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
        <li><a href="#about">About</a></li>
      </Ul>
      <SocialIconsContainer>
        <SocialIcon href="https://github.com/yerda-zh">
          <GithubIcon />
        </SocialIcon>
        <SocialIcon href="https://www.upwork.com/freelancers/~01b0805c41b72f5a30?viewMode=1">
          <UpworkIcon />
        </SocialIcon>
        <SocialIcon href="https://discordapp.com/users/1102910351189753898">
          <DiscordIcon />
        </SocialIcon>
      </SocialIconsContainer>

      <SmallScreenContainer>
        <MenuIcon onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <SmallScreen>
            <CloseMenu onClick={()=> setToggleMenu(false)}/>
            <SmallScreenLinks>
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
              <li><a href="#technologies" onClick={() => setToggleMenu(false)}>Tech</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            </SmallScreenLinks>
          </SmallScreen>
        )}
      </SmallScreenContainer>
    </Nav>
  );
}

export default Navbar;
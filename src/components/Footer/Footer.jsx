import {
  FooterContainer,
  FooterDivider,
  FooterDiv,
  PortfolioDivFooter,
  LogoLightning,  
  SocialIconsContainer,
  SocialIcon,
  GithubIcon,
  UpworkIcon,
  DiscordIcon,
  Copyright
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDivider />
      <FooterDiv>
        <PortfolioDivFooter>
          <LogoLightning />
          <p>Portfolio</p>
        </PortfolioDivFooter>
  
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
      </FooterDiv>
      <Copyright>© Yerdaulet Zhumay 2023. All rights Reserved</Copyright>
    </FooterContainer>
  );
};

export default Footer;

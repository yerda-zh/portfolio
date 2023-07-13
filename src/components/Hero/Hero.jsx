import { HeroContainer, LeftSideContainer} from "./hero.styles";

const Hero = () => {
  return (
    <HeroContainer id="home" className="app__bg">
      <LeftSideContainer>
        <h1>
          Hi, I'm <br />
          Yerdaulet Zhumay
        </h1>
        <p>
          As a front-end web developer, I take pride in crafting stunning and
          immersive digital experiences that captivate and engage users.
        </p>
        <div>
          <button>
            <span>Learn More</span>
          </button>
        </div>
      </LeftSideContainer>
      
    </HeroContainer>
  );
};

export default Hero;

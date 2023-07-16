import { useInView } from "react-intersection-observer";
import { HeroContainer, LeftSideContainer, ImgContainer} from "./hero.styles";
import '../../animations/animation.css';

const Hero = () => {
  const {ref: leftRef, inView: isLeftVisible} = useInView();
  const {ref: imgRef, inView: isImgVisible} = useInView();

  return (
    <HeroContainer id="home" className="app__bg">
      <LeftSideContainer ref={leftRef} className={`${isLeftVisible ? 'slide-right' : ''}`}>
        <h1>
          Hi, I'm <br />
          Yerdaulet Zhumay
        </h1>
        <p>
          As a Web Developer, I take pride in crafting stunning and
          immersive digital experiences that captivate and engage users.
        </p>
        <div>
          <a href="#contact">
            <button>
              <span>Contact Me</span>
            </button>
          </a>
        </div>
      </LeftSideContainer>
      <ImgContainer ref={imgRef} className={`${isImgVisible ? 'slide-left' : ''}`}>
        <img src={"/images/header-img.svg"} alt="banner"/>
      </ImgContainer>
    </HeroContainer>
  );
};

export default Hero;

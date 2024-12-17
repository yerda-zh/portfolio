import {TechDiv, TechTitle, TechContainer, FrontDev, FrontDevTitle, StateDev, StateDevTitle, UIDev, UIDevTitle, TitleDivider, } from './technologies.styles';
import {FaReact} from 'react-icons/fa';
import { MdLanguage } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import '../../animations/animation.css';
import { useInView } from 'react-intersection-observer';

const Technologies = () => {
  const {ref: leftRef, inView: isLeftVisible} = useInView();
  const {ref: techRef, inView: isTechVisible} = useInView();

  return (
    <TechContainer id='technologies' className='app__bg'>
      <TechTitle>
        <h2 ref={leftRef} className={`${isLeftVisible ? 'slide-right' : ''}`}>Technologies</h2>
        <TitleDivider ref={leftRef} className={`${isLeftVisible ? 'slide-right' : ''}`}/>
        <p>
          I've worked with a range of technologies in the web development world.
          Here are some of them:
        </p>
      </TechTitle>
      <TechDiv ref={techRef} >
        <FrontDev className={`${isTechVisible ? 'slide-left-front' : ''}`}>
          <FrontDevTitle>
            <MdLanguage/>
            <h3>
              Languages
            </h3>
          </FrontDevTitle>
          <p>
            Python, JavaScript, TypeScript, SQL (Postgres), HTML/CSS, Java, C++
          </p>
        </FrontDev>
        <StateDev className={`${isTechVisible ? 'slide-left-state' : ''}`}>
          <StateDevTitle>
            <FaReact/>
            <h3>
              Frameworks
            </h3>
          </StateDevTitle>
          <p>
            React, Next, Node, Express, Material-UI, Vite
          </p>
        </StateDev>
        <UIDev className={`${isTechVisible ? 'slide-left-ui' : ''}`}>
          <UIDevTitle>
            <FaTools/>
            <h3>
              Developer Tools
            </h3> 
          </UIDevTitle>
          <p>
            Git, Gitlab, Firebase, Docker, VS Code, WebStorm
          </p>
        </UIDev>
        <UIDev className={`${isTechVisible ? 'slide-left-libraries' : ''}`}>
          <UIDevTitle>
            <IoLibrary/>
            <h3>
              Libraries
            </h3> 
          </UIDevTitle>
          <p>
            Zustand, React Query, Axios, DayJS, Redux Toolkit, Styled Components (CSS-in-JS), SCSS, Bcrypt
          </p>
        </UIDev>
      </TechDiv>
    </TechContainer>
  );
}

export default Technologies
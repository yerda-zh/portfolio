import {TechDiv, TechTitle, TechContainer, FrontDev, FrontDevTitle, StateDev, StateDevTitle, UIDev, UIDevTitle, TitleDivider, } from './technologies.styles';
import {FaReact} from 'react-icons/fa';
import {SiRedux} from 'react-icons/si';
import {FaDatabase} from 'react-icons/fa';
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
            <FaReact/>
            <h3>
              Front-end
            </h3>
          </FrontDevTitle>
          <p>
            Experience with React, Next.JS, HTML-5, Javascript, CSS-3, SCSS, Styled Components, Tailwind
          </p>
        </FrontDev>
        <StateDev className={`${isTechVisible ? 'slide-left-state' : ''}`}>
          <StateDevTitle>
            <SiRedux/>
            <h3>
              State Management
            </h3>
          </StateDevTitle>
          <p>
            Experience with Redux Thunk, Redux Saga, Redux Toolkit, API Context, Reducers
          </p>
        </StateDev>
        <UIDev className={`${isTechVisible ? 'slide-left-ui' : ''}`}>
          <UIDevTitle>
            <FaDatabase/>
            <h3>
              Back-End
            </h3> 
          </UIDevTitle>
          <p>
            Experience with Node, Express, RESTful APIs, Bcrypt, PostgreSQL, Knex, Cors
          </p>
        </UIDev>
      </TechDiv>
    </TechContainer>
  );
}

export default Technologies
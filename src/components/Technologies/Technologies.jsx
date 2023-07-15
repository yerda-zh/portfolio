import {TechDiv, TechTitle, TechContainer, FrontDev, FrontDevTitle, StateDev, StateDevTitle, UIDev, UIDevTitle, TitleDivider, } from './technologies.styles';
import {FaReact} from 'react-icons/fa';
import {SiRedux} from 'react-icons/si';
import {DiCss3} from 'react-icons/di';

const Technologies = () => {
  return (
    <TechContainer id='technologies' className='app__bg'>
      <TechTitle>
        <h2>Technologies</h2>
        <TitleDivider/>
        <p>
          I've worked with a range of technologies in the web development world.
          Here are some of them:
        </p>
      </TechTitle>
      <TechDiv>
        <FrontDev>
          <FrontDevTitle>
            <FaReact/>
            <h3>
              Front-end
            </h3>
          </FrontDevTitle>
          <p>
            Experience with React
          </p>
        </FrontDev>
        <StateDev>
          <StateDevTitle>
            <SiRedux/>
            <h3>
              State Management
            </h3>
          </StateDevTitle>
          <p>
            Experience with Redux Thunk, Redux saga, API Context, Reducers
          </p>
        </StateDev>
        <UIDev>
          <UIDevTitle>
            <DiCss3/>
            <h3>
              Design
            </h3> 
          </UIDevTitle>
          <p>
            Experience with CSS, SCSS, Styled Components, Tailwind
          </p>
        </UIDev>
      </TechDiv>
    </TechContainer>
  );
}

export default Technologies
import {ProjectsContainer, ProjectsDivider, ProjectsDiv} from './projects.styles';
import {ProjectsCard} from './ProjectsCard';
import { projects } from '../../constants/constants';
import '../../animations/animation.css';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const {ref: leftRef, inView: isLeftVisible} = useInView();
  const {ref: ProjectRef, inView: isProjectVisible} = useInView();

  return (
    <ProjectsContainer id="projects">
      <h2 ref={leftRef} className={`${isLeftVisible ? 'slide-right' : ''}`}>Projects</h2>
      <ProjectsDivider className={`${isLeftVisible ? 'slide-right' : ''}`}/>
      <ProjectsDiv ref={ProjectRef} className={`${isProjectVisible ? 'slide-left' : ''}`}>
        {projects.map(({imgUrl, title, description, tech, view, source})=>(
          <ProjectsCard
            key={title}
            imgUrl={imgUrl}
            title={title}
            description={description}
            tech={tech}
            view={view}
            source={source}
          />
        ))}
        </ProjectsDiv>
    </ProjectsContainer>
  );
}

export default Projects;
import {ProjectsContainer, ProjectsDivider, ProjectsDiv} from './projects.styles';
import {ProjectsCard} from './ProjectsCard';
import { projects } from '../../constants/constants';

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <ProjectsDivider />
      <ProjectsDiv>
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
import {ProjectsContainer, ProjectsDivider} from './projects.styles';
import {ProjectsCard} from './ProjectsCard';

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsDivider/>
      <h1>Projects</h1>

      <div>
        <ProjectsCard 
          imgUrl=""
          title="Gericht Restaurant" 
          description="This projedsfdgfhjkj"
          tech={[
            'react',
            'tailwind',
          ]}
        />
        <ProjectsCard 
          imgUrl=""
          title="Modern Bank" 
          description="lorem ipsum scdvkf sdfl sdf"
          tech={[
            'react',
            'tailwind',
          ]}
        />
        <ProjectsCard 
          imgUrl=""
          title="Chat GPT-4" 
          description="lorem ipsum scdvkf sdfl sdf"
          tech={[
            'react',
            'tailwind',
          ]}
        />
        <ProjectsCard 
          imgUrl=""
          title="Crown Clothing" 
          description="lorem ipsum scdvkf sdfl sdf"
          tech={[
            'react',
            'tailwind',
          ]}
        />
      </div>
    </ProjectsContainer>  
  )
}

export default Projects;
import {ProjectsContainer, ProjectsDivider, ProjectsDiv} from './projects.styles';
import {ProjectsCard} from './ProjectsCard';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectsDivider />
      <ProjectsDiv>
        <ProjectsCard
          imgUrl='/images/gericht.png'
          title="Gericht Restaurant"
          description="The landing page project aimed to create a visually stunning and user-friendly website for Gericht Restaurant. Leveraging the power of React, the website was meticulously designed and developed to provide an immersive digital experience to users while seamlessly adapting to all platforms."
          tech={["React", "Javascript"]}
          view='https://yerda-zh.github.io/gericht-restaurant/'
          source='https://github.com/yerda-zh/gericht-restaurant'
        />
        <ProjectsCard
          imgUrl="/images/bank.png"
          title="Modern Bank"
          description="the Hoobank front-end project is a robust and visually appealing web application developed using React, Vite, and Tailwind CSS. This combination of cutting-edge technologies enables to deliver a fast, responsive, and user-friendly banking experience for valued customers."
          tech={["React", "Vite", "Tailwind"]}
          view='https://yerda-zh.github.io/bank-modern/'
          source='https://github.com/yerda-zh/bank-modern'
        />
        <ProjectsCard
          imgUrl="/images/gpt4.png"
          title="Chat GPT-4"
          description="lorem ipsum scdvkf sdfl sdf"
          tech={["react", "tailwind"]}
        />
        <ProjectsCard
          imgUrl="/images/crwn.png"
          title="Crown Clothing"
          description="lorem ipsum scdvkf sdfl sdf"
          tech={["react", "tailwind"]}
        />
      </ProjectsDiv>
    </ProjectsContainer>
  );
}

export default Projects;
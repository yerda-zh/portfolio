import { ProjectCardContainer, ProjectCardDivider, TechContainer, ButtonContainer, TechItem, Buttons } from "./ProjectsCard.styles";

export const ProjectsCard = ({imgUrl, title, description, tech, view, source}) => {
    return (
        <ProjectCardContainer>
            <img src={imgUrl} alt={imgUrl}/>
            <h3>{title}</h3>
            <ProjectCardDivider />

            <p>{description}</p>

            <TechContainer>
                {tech.map((item)=>(
                    <TechItem key={item}>{item}</TechItem>
                ))}   
            </TechContainer>
            
            <Buttons>
                <a href={view}>
                    <ButtonContainer>
                        <button>
                            <span>View</span>
                        </button>
                    </ButtonContainer>   
                </a>
                <a href={source}>
                    <ButtonContainer>
                        <button>
                            <span>Source</span>
                        </button>
                    </ButtonContainer>
                </a>
            </Buttons>
        </ProjectCardContainer>
    );
};

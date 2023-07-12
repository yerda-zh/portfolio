import { ProjectCardContainer, ProjectCardDivider, TechContainer, ButtonContainer, TechItem } from "./ProjectsCard.styles";

export const ProjectsCard = ({imgUrl, title, description, tech}) => {
    return (
        <ProjectCardContainer>
            <img src={imgUrl} alt={imgUrl}/>
            <h4>{title}</h4>
            <ProjectCardDivider />
            <p>{description}</p>

            <TechContainer>
                {tech.map((item)=>(
                    <TechItem>{item}</TechItem>
                ))}
            </TechContainer>
            
            <div>
                <ButtonContainer>
                    <button><span>View</span></button>
                </ButtonContainer>
                <ButtonContainer>
                    <button><span>Source</span></button>
                </ButtonContainer>
            </div>
        </ProjectCardContainer>
    );
};

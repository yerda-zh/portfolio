import { styled } from "styled-components";

export const ProjectsContainer = styled.div`
    background: var(--color-navy);
    width: 100%;
    height: 100%;
    color: #fff;

    div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
`;
export const ProjectsDivider = styled.div`

`;
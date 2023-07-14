import { styled } from "styled-components";

export const ProjectsContainer = styled.div`
    background: var(--color-navy);
    font-family: var(--font-base);
    width: 100%;
    height: 100%;
    color: #fff;

    h2 {
        font-weight: 700;
        font-size: 55px;
        line-height: 62px;
        width: max-content;
        max-width: 100%;
        background: linear-gradient(304deg, #DCD6F7 0%, #A6B1E1 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 2rem 0 1rem 4rem;
    }
`;

export const ProjectsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    padding: 3rem;
    
    align-self: center;
    /* place-items: center; */
    column-gap: 2rem;
    row-gap: 3rem;
    margin: 0 5rem;
`;

export const ProjectsDivider = styled.div`
    margin: 0 0 4rem 4rem;
    width: 120px;
    height: 5px;
    border-radius: 10px;
    background: linear-gradient(304deg, #F4EEFF 0%, #DCD6F7 100%);
`;
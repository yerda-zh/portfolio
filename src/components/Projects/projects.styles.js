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

    @media screen and (max-width: 768px) {
        h2 {
            font-size: 40px;
            line-height: 50px;
            padding: 1.7rem 0 1rem 3rem;
        }
    }
    @media screen and (max-width: 540px) {
        h2 {
            font-size: 30px;
            line-height: 20px;
        }
    }
`;

export const ProjectsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    padding-bottom: 3rem;
    place-items: center;
    column-gap: 1rem;
    row-gap: 2rem;
    margin: 0 7rem;

    @media screen and (max-width: 768px) {
        margin: 0 2rem;
        padding: 2rem;
    }
    @media screen and (max-width: 540px) {
        margin: 0 1rem;
        padding: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    @media screen and (max-width: 360px) {
        margin: 0 .5rem;
        padding: .5rem;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const ProjectsDivider = styled.div`
    margin: 0 0 3rem 4rem;
    width: 120px;
    height: 5px;
    border-radius: 10px;
    background: linear-gradient(304deg, #F4EEFF 0%, #DCD6F7 100%);

    @media screen and (max-width: 768px) {
        width: 100px;
        height: 4px;
    }
    @media screen and (max-width: 540px) {
        width: 80px;
        height: 3px;
    }
`;
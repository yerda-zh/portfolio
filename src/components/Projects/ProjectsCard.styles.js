import { styled } from "styled-components";

export const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    max-width: 400px;
    background: var(--color-navy);
    box-shadow: 0 0 20px rgb(244 238 255 / 0.2);

    img {
        width: 100%;
        height: 100%;
        padding-bottom: 2rem;
        border-radius: 15px 15px 0 0;
    }

    h3 {
        text-align: center;
        font-weight: bold;
        padding: .5rem 0;
        color: var(--color-l-blue);
        font-size: 24px;
    }

    p {
        width: 100%;
        padding: 0 50px;
        line-height: 24px;
        text-align: justify;
        margin: 2rem 0;
    }

`;
export const ProjectCardDivider = styled.hr`
    background: #fff;
    height: 4px;
    width: 140px;
    border-radius: 10px;
`;
export const TechContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 0 1rem;
    list-style: none;
`;

export const TechItem = styled.li`
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--color-m-purple);
`;

export const Buttons = styled.div`
    margin: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    
`;
export const ButtonContainer = styled.div`
    width: 120px;
    height: 40px;
    border-radius: 30px;
    overflow: hidden;
    border: none;
    position: relative;
    z-index: 1;
    
    

    button {
        width: 100%;
        height: 100%;
        font-weight: 700;
        border: 1.5px solid #DCD6F7;
        color: #fff;
        padding: 5px 18px;
        font-size: 16px;
        border-radius: 30px;
        background-color: transparent;
	    transition: 0.25s ease-in-out;
        cursor: pointer;
    }

    span {
        z-index: 1;
    }

    button::before {
        content: "";
        border-radius: 30px;
        width: 0%;
        height: 100%;
        position: absolute;
        background: linear-gradient(73deg, #DCD6F7 0%, #A6B1E1 100%);
        left: 0;
        top: 0;
        z-index: -1;
        transition: 0.25s ease-in-out;
    }
    button:hover {
        color: var(--color-navy);
    }
    button:hover::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
    }
`;
import { styled } from "styled-components";

export const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 15px;
    max-width: 85%;
    background: linear-gradient(165deg, #121B32 0%, #1F2941 100%);
    transition: 0.3s ease-in-out;

    img {
        width: 100%;
        height: 100%;
        padding-bottom: 1.5rem;
        border-radius: 15px 15px 0 0;
    }

    h3 {
        text-align: center;
        font-weight: bold;
        padding: .5rem 0;
        color: var(--color-l-blue);
        font-size: 1.5rem;
        cursor: default;
        transition: 0.2s ease-in-out;

        &:hover {
            color: var(--color-m-purple);
        }
    }

    p {
        width: 100%;
        padding: 0 1.8rem;
        line-height: 1.5rem;
        text-align: justify;
        margin: 1.5rem 0;
    }

    &:hover {
        box-shadow: 0 0 15px rgb(244 238 255 / 0.3);
        transform: scale(1.03);
    }

    @media screen and (max-width: 540px) {
        h3 {
            font-size: 1.25rem;
        }
        p {
            padding: 0 1.25rem;
            font-size: .8rem;
        }
    }
    @media screen and (max-width: 425px) {
        img {
            padding-bottom: 1rem;
        }
        h3 {
            font-size: 15px;
        }
        p {
            padding: 0 10px;
            font-size: .6rem;
            margin: 1rem 0;
        }
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
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 1rem;
    list-style: none;
`;

export const TechItem = styled.li`
    font-size: 1.1rem;
    margin: .3rem;
    font-weight: bold;
    color: var(--color-m-purple);

    @media screen and (max-width: 540px) {
        font-size: .9rem;
    }
    @media screen and (max-width: 425px) {
        font-size: .7rem;
    }
`;

export const Buttons = styled.div`
    margin: 1.5rem 0;
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 425px) {
        margin: 1rem 0;
    }
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
        font-family: var(--font-base);
        border: 1.5px solid #D1D7F4;
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
        background: linear-gradient(160deg, #D1D7F4 0%, #A6B1E1 100%);
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

    @media screen and (max-width: 540px) {
        width: 100px;
        height: 30px;
        button {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 425px) {
        width: 80px;
        height: 25px;
        button {
            font-size: 10px;
        }
    }
`;
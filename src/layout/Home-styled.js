import styled from "styled-components";

export const ContainerImage = styled.div`
    min-height: 350px;
    display: flex;
    position: relative;
    background-color: #000;
    img 
    {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
        opacity: .4;
        object-fit: cover;
    }
`;
export const ContainerApresentationText = styled.label`
    z-index: 1;
    color: #fff;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto auto auto 60px;
    h1 
    {
        font-size: 1.5rem;
        margin: 20px 0;
        font-weight: bold;
    }
    p 
    {
        font-size: 1rem;
        line-height: 30px;
    }
    @media (max-width: 650px)
    {
        margin: 0;
        padding: 5px;
        width: 100%;
    }
`;
export const ContainerProducts = styled.div`
    display: flex;
    min-height: 650px;
    background-color: #fff;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    label 
    {
        display: block;
        width: 100%;
        margin: 10px 0;
        h1
        {
            margin: 50px 0 10px 0;
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
        p 
        {
            font-size: 1rem;
            line-height: 20px;
            text-align: center;
        }
    } 
`; 
export const Card = styled.section`
    width: 250px;
    height: 250px;
    background-color: #EBE9EA;
    margin: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s all ease;
    &:hover 
    {
        transform: scale(1.02);
        box-shadow: 0px 0px 10px #00000050;
    }
    @media (max-width: 400px)
    {
        width: 100%;
        img 
        {
            width: 100%;
        }
    }
`;
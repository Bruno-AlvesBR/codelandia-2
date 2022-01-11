import styled from "styled-components";

export const Content = styled.section`
    min-height: 650px;
`;
export const ContainerImage = styled.section`
    width: 100%;
    max-width: 1300px;
    min-height: 350px;
    max-height: 350px;
    display: flex;
    margin: auto;
    position: relative;
    img 
    {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
        opacity: .4;
        object-fit: cover;
    }
    .box-apresentation 
    {
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
    }
    @media (max-width: 650px)
    {
        .box-apresentation
        {
            margin: 0;
            padding: 5px;
            width: 100%;
        }
    }
`;
export const ContainerCards = styled.section`
    width: 100%;
    max-width: 1300px;
    display: flex;
    margin: auto;
    min-height: 650px;
    background-color: #fff;
    position: relative;
    align-items: center;
    flex-direction: column;
    h1
    {
        margin: 50px 0 10px 0;
        font-size: 1.5rem;
        font-weight: bold;
    }
    p 
    {
        font-size: 1rem;
        text-align: center;
    }
`;
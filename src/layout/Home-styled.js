import styled from "styled-components";

export const Content = styled.section`
    min-height: 650px;
`;
export const ContainerImage = styled.section`
    min-height: 350px;
    max-height: 350px;
    display: flex;
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
    display: flex;
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
        line-height: 20px;
        text-align: center;
    }
    .box-products
    {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 50px 0;
        .card 
        {
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
        }
    }
    @media (max-width: 400px)
    {
        .box-products
        {
            .card 
            {
                width: 100%;
                img 
                {
                    width: 100%;
                }
            }
        }
    }
`;
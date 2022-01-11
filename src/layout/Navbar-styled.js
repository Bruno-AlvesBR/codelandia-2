import styled from "styled-components";

export const Content = styled.section`
    nav 
    {
        width: 100%;
        height: auto;
        .container-navbar 
        {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin: auto;
            align-items: center;
            header 
            {
                padding: 10px;
                width: 100%;
                color: #fff;
                background-color: #181818;
                text-align: center;
            }
            main 
            {
                width: 100%;
                background-color: #fff;
                padding: 10px;
                font-weight: bold;
                font-size: 1rem;
                text-align: center;
            }
        }
    }
`;
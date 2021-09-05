import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    margin: 0 auto;
    background: var(--medYellow);
    border-radius: 20px;
    box-shadow: 5px 5px 10px grey;

    button {
        margin: 5px;
        background: var(--white);
        border-radius: 20px;
        border: none;
        width: 100px;
        height: 60px;
        font-size: var(--fontBig);
        display: inline;

        @media (max-width: 768px){
            width: 60px;
            font-size: var(--fontMed);
        }
    }

    .danger {
        background: #ff000088;
        :hover {
            background: #ff000055;
        }
    }

    .success {
        background: #00ff0088;
        :hover {
            background: #00ff0055;
        }
    }
    
    input {
        margin: 5px;
        padding: 15px;
        border: none;
        outline: none;
        background: var(--lightYellow);
        border-radius: 10px;
        width: 100%;
        height: 80px;
        font-size: var(--fontBig);
        font-weight: bold;
        text-align: center;

        @media (max-width: 768px){
            height: 60px;
            font-size: var(--fontMed);
        }
    }

    textarea{
        margin: 5px;
        padding: 15px;
        border: none;
        outline: none;
        background: var(--lightYellow);
        border-radius: 10px;
        width: 100%;
        height: 200px;
        font-size: var(--fontBig);
        resize: none;

        @media (max-width: 768px){
            height: 150px;
            font-size: var(--fontMed);
        }
    }
`;

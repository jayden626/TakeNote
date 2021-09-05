import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    
`;

export const Content = styled.div`
    text-align: center;

    input {
        margin-bottom: 10px;
        color: var(--darkGrey);
        background: var(--lightYellow);
        border: none;
        outline: none;
        border-radius: 0 0 0.8rem 0.8rem;
        font-size: var(--fontSuperBig);
        font-weight: bold;
        text-align: center;
        width: 100%;
        height: 1.8em;

        @media (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;
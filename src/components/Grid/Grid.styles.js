import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
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

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    grid-gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    }
`;
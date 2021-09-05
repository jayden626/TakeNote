import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--darkGrey);
        background: var(--lightYellow);
        border-radius: 0.8rem;
        font-size: var(--fontSuperBig);
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
`;
import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 20px 20px;
    background: url(${props => props.img});
    border-radius: 20px;
    text-align: center;

    h1 {
        display: inline-block;
        padding: 10px 20px;
        color: var(--medGrey);
        background: var(--lightGrey);
        border-radius: 10px;
        font-size: var(--fontSuperBig);
        width: 100%;
        height: 60px;

        @media (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
`;
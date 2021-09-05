import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    grid-gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    }
`;
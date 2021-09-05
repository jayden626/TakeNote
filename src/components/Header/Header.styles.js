import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 10px 0;
    }
`;

export const LogoImg = styled.img`
    width: 250px;

    @media (max-width: 768px) {
        width: 200px;
    }
`;
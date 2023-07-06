import styled from "styled-components";

export const Head = styled.header`
    padding: 0 20px;
    border-bottom: 2px solid rgb(229, 227, 227);
    display: grid;
    grid-template-columns: auto auto;
    align-content: space-around;
    gap: 50px;

    @media (max-width: 791px) {
    grid-template-columns: 1fr;
    }
`
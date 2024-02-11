import styled from "styled-components";

export const MainHead = styled.header`
    padding: 0 20px;
    display: grid;
    grid-template-columns: auto auto;
    align-content: space-around;
    gap: 50px;
    border-bottom: 2px solid rgb(229, 227, 227);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    }

`
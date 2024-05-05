import styled from "styled-components";

export const SectionBody = styled.section`
    background: white;
    padding: 5px;
    box-shadow: 1px -1px 5px 0px #D5CEDD;
    margin: 10px 0px;
`;

export const Title = styled.header`
    border-bottom: solid 1px #e5e3e3;
    padding-bottom: 10px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    border-bottom: 2px solid rgb(239, 237, 237);
    padding: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
    `
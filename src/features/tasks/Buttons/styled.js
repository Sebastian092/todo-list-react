import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.teal};
    transition: color 1s;
    font-size: 1em;
    transition: 0.5s;


    &:hover {
    color: rgb(3, 180, 200);
    }

    &:active {
    color: rgb(5, 240, 240);
    }

    &:disabled {
    color: ${({theme}) => theme.colors.gray};
    }
`
export const TaskButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-end;
    

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-flow: column wrap;
    }
`

import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    border: none;
    color: teal;
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
    color: rgb(219, 218, 218);
    }
`
export const TaskButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-end;


    @media (max-width: 791px) {
    flex-flow: column wrap;
    }
`
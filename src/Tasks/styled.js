import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding: 5px 15px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    border-bottom: solid 2px rgb(229, 227, 227);;
    padding:5px 10px;

    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
    text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    transition: 1s;
    margin: 0;
`;


export const ToggleDoneButton = styled(Button)`
        background: green;

        &:hover {
        filter: brightness(120%)
        }

        &:active {
            filter: brightness(130%)
        }
`;

export const RemoveButton = styled(Button)`
    background: rgb(255, 0, 0);

    &:hover {
        filter: brightness(120%)
        }

        &:active {
            filter: brightness(130%)
        }
`;
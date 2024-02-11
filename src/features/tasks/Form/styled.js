import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    transition: 1s;

    &:hover { 
    background: rgb(1, 164, 164);
    transform: scale(1.15);
    }

    &:active {
    background: rgb(2, 165, 195);
    transform: scale(1.15);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 10px;
        min-width: auto;
    }
`

export const FormSection = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    padding: 10px;
    margin: 5px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    }
`
export const Input = styled.input`
    padding: 8px;
`
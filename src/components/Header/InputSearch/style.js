import styled from "styled-components";

export const StyledInputSearch = styled.div`
    background-color: #FFFFFF;
    border: var(--grey-20) solid 2px;
    border-radius: 8px;
    padding: 10px;

    :has(input:focus){
        border: 2px solid black;
    }

    form{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content-center;
        width: 100%;
    }

    input{
        border: none;
        outline: none;
        background-color: #FFFFFF;
        color: var(--grey-50);
        font-weight: 400;
        font-size: 1rem;
        width: 100%;
    }

    input::placeholder{
        color: var(--grey-20);
        font-weight: 400;
        font-size: 1rem;
    }

    button{
        border: none;
        border-radius: 8px;
        padding: 11.5px 20px;
        background-color: var(--color-primary);

        font-weight: 500;
        font-size: 0.875rem;
        color: #FFFFFF;
    }

    button:hover{
        background-color: var(--color-primary-50);
    }
`
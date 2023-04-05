import styled from "styled-components";

export const StyledCartCard = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }

    div > h2{
        font-weight: 700;
        font-size: 1.125rem;
        color: var(--grey-100);
    }

    div > span{
        font-weight: 400;
        font-size: 0.75rem;
        color: var(--grey-50);
    }

    img{
        height: 70px;
        width: 70px;
        background-color: var(--grey-0);
        border-radius: 5px;
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
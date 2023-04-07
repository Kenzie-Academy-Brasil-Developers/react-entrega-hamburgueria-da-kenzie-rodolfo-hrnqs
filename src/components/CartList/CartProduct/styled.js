import styled from "styled-components";

export const StyledCartCard = styled.li`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    
    padding: 20px;
    width: 100%;

    div{
        display: flex;
        margin-top: 4px;
        width: 170px;
    }

    div > div{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    div > div > h2{
        font-weight: 700;
        font-size: 1.125rem;
        color: var(--grey-100);
    }

    div > div > span{
        font-weight: 400;
        font-size: 0.75rem;
        color: var(--grey-50);
    }

    img{
        height: 80px;
        width: 80px;
        background-color: var(--grey-20);
        border-radius: 5px;
        margin-right: 10px;
    }

    button{
        border: none;
        border-radius: 8px;
        background-color: transparent;
        position: absolute;
        top: 24px;
        right: 20px;

        font-weight: 500;
        font-size: 0.75rem;
        color: var(--grey-50); 
    }

    button:hover{
        background-color: var(--color-primary-50);
    }
`
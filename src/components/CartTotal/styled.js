import styled from "styled-components";

export const StyledCartTotal = styled.div`
    border-top: 2px solid var(--grey-20);
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;

    div{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    div > span{
        font-weight: 600;
        font-size: 0.875rem;
        color: var(--grey-100);
    }

    div > p{
        font-weight: 600;
        font-size: 0.875rem;
        color: var(--grey-50);
    }

    button{
        width: 100%;
        border-radius: 8px;
        border: none;
        padding: 20px 0px;
        background-color: var(--grey-20);

        font-weight: 600;
        font-size: 1rem;
        color: var(--grey-50);
    }

    button:hover{
        background-color: var(--grey-50);
        color: var(--grey-20);
    }
`
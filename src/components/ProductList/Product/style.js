import styled from "styled-components";

export const StyledProduct = styled.li`
    border: 2px solid var(--grey-20);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 150px;
        background-color: var(--grey-0);
    }

    img{
        height: 150px;
        width: fit-content;
    }

    button{
        border: none;
        border-radius: 8px;
        padding: 11.5px 20px;
        background-color: var(--color-primary);
        align-self: flex-start;
        margin-bottom: 22px;

        font-weight: 500;
        font-size: 0.875rem;
        color: #FFFFFF;
    }

    button:hover{
        background-color: var(--color-primary-50);
    }

    h3, span, p, button{
        margin-left: 20px;
    }
`
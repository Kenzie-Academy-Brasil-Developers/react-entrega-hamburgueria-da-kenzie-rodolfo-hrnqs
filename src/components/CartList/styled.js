import styled from "styled-components";

export const StyledProductCart = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    
    h3{
        background-color: var(--color-primary);
        color: #FFFFFF;
        border-radius: 5px 5px 0px 0px;
        padding: 20px;
    }

    ul{
        background-color: var(--grey-0);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    ul > h2{
        margin-top: 55px;
        font-weight: 700;
        font-size: 1.125rem;
        color: var(--grey-100);
    }

    ul > span{
        margin-bottom: 45px;
        font-weight: 400;
        font-size: 0.875rem;
        color: var(--grey-50);
    }

    @media(min-width: 800px){
        margin-top: 0px;
        h3{
            width: 365px;
        }
    }

`

export const StyledFullProductCart = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    ul{
        background-color: var(--grey-0);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h3{
        background-color: var(--color-primary);
        color: #FFFFFF;
        border-radius: 5px 5px 0px 0px;
        padding: 20px;
    }

    @media (min-width: 800px){
        margin-top: 0px;
        h3{
            width: 365px;
        }
    }

`
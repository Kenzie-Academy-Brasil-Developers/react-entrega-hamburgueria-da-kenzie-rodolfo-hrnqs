import styled from "styled-components";

export const StyledProductList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    overflow-y: auto;

    ::-webkit-scrollbar { 
        display: none;
      }

    @media (min-width: 800px){
        display: flex;
        flex-wrap: wrap;
        max-width: 955px;
    }
`

export const StyledProductSearch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;

    span{
        color: var(--grey-50);
    }

    button{
        border: none;
        border-radius: 8px;
        padding: 11.5px 20px;
        background-color: var(--color-primary);
        align-self: flex-start;
        margin-bottom: 14px;

        font-weight: 500;
        font-size: 0.875rem;
        color: #FFFFFF;
    }

    button:hover{
        background-color: var(--color-primary-50);
    }

    @media (min-width: 800px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
        margin-top: 0;

        button{
            align-self: center;
            margin-bottom: 0;
        }
    }
`
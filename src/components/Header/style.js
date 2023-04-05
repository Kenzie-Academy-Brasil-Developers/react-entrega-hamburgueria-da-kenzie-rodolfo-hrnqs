import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: var(--grey-0);
    
    img{
        height: 37px;
        width: 159px;
    }

    .flexBox{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 14px;
        max-width: 1390px;
    }

    @media (min-width: 800px){
        .flexBox{
            flex-direction: row;
            justify-content: space-between;
        }
    }
`
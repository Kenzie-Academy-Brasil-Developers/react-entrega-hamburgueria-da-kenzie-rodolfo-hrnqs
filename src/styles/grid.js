import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 1370px;
    margin: 0 auto;
    padding: 16px;

    .productListBox{
        margin-right: 0px;
    }

    @media (min-width: 800px){
        padding: 30px 115px;
        display: flex;
        flex-direction: row; 

        .productListBox{
            margin-right: 65px;
        }
    }
`
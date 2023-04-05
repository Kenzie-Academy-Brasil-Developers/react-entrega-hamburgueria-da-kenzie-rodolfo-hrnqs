import styled, { css } from "styled-components";

export const titleStyles = css`
   font-weight: 700;
   line-height: 1.4;
   color: var(--grey-100);
   ${({ fontSize }) => {
      switch (fontSize) {
         case "one":
            return css`
               font-size: 1.625rem;
            `;
         case "two":
            return css`
               font-size: 1.375rem;
            `;
         case "three":
            return css`
               font-size: 1.125rem;
            `;
         case "four":
            return css`
               font-size: 0.875rem;
            `;
      }
   }}
`;

export const StyledTitleOne = styled.h1`
    ${titleStyles};
`

export const StyledTitleTwo = styled.h2`
    ${titleStyles};
`

export const StyledTitleThree = styled.h3`
    ${titleStyles};
`

export const StyledTitleFour = styled.h4`
    ${titleStyles};
`

export const StyledCaption = styled.span`
   font-weight: 400;
   font-size: 0.75rem;
   color: var(--grey-50);
`

export const StyledPrice = styled.p`
   font-weight: 600;
   font-size: 0.875rem;
   color: var(--color-primary);
`
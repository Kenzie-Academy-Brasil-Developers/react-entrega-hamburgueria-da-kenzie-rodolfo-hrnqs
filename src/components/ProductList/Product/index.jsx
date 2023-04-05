import { StyledCaption, StyledPrice, StyledTitleThree } from "../../../styles/typography"
import { StyledProduct } from "./style"

export const Product = ({ product, addProductToCart }) => {
    return (
        <StyledProduct>
            <div>
                <img src={product.img} alt="" />
            </div>
            <StyledTitleThree fontSize="three">{product.name}</StyledTitleThree>
            <StyledCaption>{product.category}</StyledCaption>
            <StyledPrice>{`R$: ${parseFloat(product.price).toFixed(2)}`}</StyledPrice>
            <button onClick={() => addProductToCart(product.id)}>Adicionar</button>
        </StyledProduct>
    )
}
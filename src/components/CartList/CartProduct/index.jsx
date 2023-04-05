import { StyledCartCard } from "./styled"

export const CartProduct = ({ cartProduct, removeProductFromCart }) => {
    return(
        <StyledCartCard>
            <img src={cartProduct.img} alt="" />
            <div>
                <h2>{cartProduct.name}</h2>
                <span>{cartProduct.category}</span>
            </div>
            <button onClick={() => removeProductFromCart(cartProduct.id)}>Remover</button>
        </StyledCartCard>
    )
}
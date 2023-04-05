import { StyledTitleThree } from "../../styles/typography"
import { CartTotal } from "../CartTotal"
import { CartProduct } from "./CartProduct"
import { StyledProductCart, StyledFullProductCart } from "./styled"

export const CartList = ({ cartList, removeProductFromCart, currentSale, setCartList }) => {
    if (cartList.length === 0) {
        return(
            <StyledProductCart>
                <StyledTitleThree fontSize="three">Carrinho de compras</StyledTitleThree>
                <ul>
                    <h2>Sua sacola está vazia</h2>
                    <span>Adicione itens</span>
                </ul>
            </StyledProductCart>
        )
    } else {
        return (
            <StyledFullProductCart>
                <StyledTitleThree fontSize="three">Carrinho de compras</StyledTitleThree>
                <ul>
                    {cartList.map((cartProduct) => {
                       return <CartProduct key={cartProduct.id} cartProduct={cartProduct} removeProductFromCart={removeProductFromCart}/> 
                    })}
                </ul>
                <CartTotal currentSale={currentSale} setCartList={setCartList}/>
            </StyledFullProductCart>
        )
    }
}
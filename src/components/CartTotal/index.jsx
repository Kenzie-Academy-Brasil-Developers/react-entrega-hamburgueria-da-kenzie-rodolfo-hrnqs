import { toast } from "react-toastify"
import { StyledCartTotal } from "./styled"

export const CartTotal = ({ currentSale, setCartList }) => {
    return (
        <StyledCartTotal>
            <div>
                <span>Total</span>
                <p>{`R$ ${parseFloat(currentSale).toFixed(2)}`}</p>
            </div>
            <button onClick={() => {
                setCartList([])
                toast.error("Todos os itens foram removidos do carrinho")
            }}>Remover todos</button>
        </StyledCartTotal>
    )
}
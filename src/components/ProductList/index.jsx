import { StyledTitleOne } from "../../styles/typography"
import { Product } from "./Product"
import { StyledProductList, StyledProductSearch } from "./style"

export const ProductList = ({ productList, addProductToCart, filteredResults, search, setSearch }) => {
    const currentProductList = search !== "" ? filteredResults : productList
    return (
        <>
            {search !== "" ? <StyledProductSearch>
                <StyledTitleOne fontSize="one">{search !== "" ? `Resultados para: ` : null}<span>{search !== "" ? `${search}` : null}</span></StyledTitleOne>
                {search !== "" ? <button onClick={() => setSearch("")}>Limpar busca</button> : null}
            </StyledProductSearch> : null}
            <StyledProductList>
                {currentProductList.map((product) => {
                    return <Product key={product.id} product={product} addProductToCart={addProductToCart} />
                })}
            </StyledProductList>
        </>
    )
}
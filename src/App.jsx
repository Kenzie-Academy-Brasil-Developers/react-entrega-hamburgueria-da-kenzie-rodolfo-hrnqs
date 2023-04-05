import { useState } from 'react';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { CartList } from './components/CartList';
import { ProductList } from './components/ProductList';
import { api } from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './styles/GlobalStyles';
import { StyledContainer } from './styles/grid';

function App() {
  const localStorageUserCart = localStorage.getItem("@USERCART");
  const [productList, setProductList] = useState([])
  const [cartList, setCartList] = useState(localStorageUserCart ? JSON.parse(localStorageUserCart) : [])
  const [search, setSearch] = useState("")

  const currentSale = cartList.reduce((previousValue, cartProduct) => {
    return Number(previousValue += parseFloat(cartProduct.price))
  }, 0)

  const filteredResults = productList.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()))

  const addProductToCart = (productId) => {
    const newCartProduct = productList.find(product => product.id === productId)
    const newCartList = [...cartList, newCartProduct]
    if (!cartList.some(cartProduct => cartProduct.id === productId)) {
      setCartList(newCartList)
      toast.success("Produto adicionado ao carrinho")
    } else {
      toast.error("Este produto já foi adicionado")
    }
  }

  const removeProductFromCart = (cartProductId) => {
    const newCartList = cartList.filter(cartProduct => cartProduct.id !== cartProductId)
    setCartList(newCartList)
    toast.error("Item removido com sucesso")
  }

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('products');
        setProductList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  }, [])

  useEffect(() => {
    localStorage.setItem("@USERCART", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <div className="App">
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
      <Header setSearch={setSearch} />
      <main>
        <StyledContainer>
          <div className="productListBox">
            <ProductList
              addProductToCart={addProductToCart}
              productList={productList}
              filteredResults={filteredResults}
              search={search}
              setSearch={setSearch} />
          </div>
          <CartList cartList={cartList}
            removeProductFromCart={removeProductFromCart}
            currentSale={currentSale}
            setCartList={setCartList} />
        </StyledContainer>
      </main>
    </div>
  )
}

export default App

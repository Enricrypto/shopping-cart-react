import { useState } from 'react' 
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart/Cart.jsx'
import { CartProvider } from './context/cart.jsx'


function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, filters } = useFilters()
  
  const filteredProducts = filterProducts(products)

  return (
      <CartProvider>
      <Header />
      <Cart/>
      <Products products={filteredProducts} />
      <Footer filters={filters}/>
      </CartProvider>
  )
}

export default App
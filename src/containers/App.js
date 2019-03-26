import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div className="main">
    <h2 className="header">Acme Store</h2>
    <div className="hr" />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
)

export default App

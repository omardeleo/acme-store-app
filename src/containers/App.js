import React from 'react'
import { connect } from 'react-redux'

import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = ({store, isCartOpen}) => {
  return (
    <div className="main">
      {isCartOpen ? <CartContainer /> : 
        <div>
          <div className="header-section">
            <h2 className="header">Acme Store</h2>
            <button onClick={() => store.dispatch({ type: "TOGGLE_CART" })}>Shopping Cart</button>
          </div>
            <div className="hr" />
          <ProductsContainer />
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  isCartOpen: state.cart.isCartOpen
})

export default connect(
  mapStateToProps,
  null
)(App)


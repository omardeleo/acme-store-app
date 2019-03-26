import React from 'react'
import { connect } from 'react-redux'

import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = ({store, isCartOpen, cartQty}) => {
  const buttonText = cartQty ? `Your cart [${cartQty}]` : `Your cart is empty`
  return (
    <div className="main">
      {isCartOpen ? <CartContainer store={store} /> : 
        <div className="main">
          <div className="header-section">
            <h2 className="header">Acme Store</h2>
            <div className="cart-button" 
              onClick={() => store.dispatch({ type: "TOGGLE_CART" })}>
              <i className="fas fa-shopping-cart"></i>
              {buttonText}
            </div>
          </div>
            <div className="hr" />
          <ProductsContainer />
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isCartOpen: state.cart.isCartOpen,
    cartQty: state.cart.addedIds.length
  }
}

export default connect(
  mapStateToProps,
  null
)(App)


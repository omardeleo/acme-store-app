import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked, onToggleCart }) => {
  const hasProducts = products.length > 0
  const nodes = false ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div className="cart-text">
      Please add some products to your cart.
    </div>
  )

  return (
    <div className="cart-container">
      <div className="cart-modal">
        <div className="button-container">
          <img className="close-cart-button" 
            src="assets/images/close_btn.png" 
            onClick={onToggleCart} />
        </div>
        <h3 className="cart-header">Your cart</h3>
        <div className="hr"></div>
        <div className="cart-content">
          <div className="cart-message">
            <img className="cart-icon" src="assets/images/cart.png" />
            {nodes}
          </div>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart

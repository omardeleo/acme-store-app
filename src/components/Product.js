import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className="product-item">
    <div className="product-item-info">
      <div className="product-row-1">
        <div className="product-title">{title}</div>
        <div className="product-price">&#36;{price}</div>
      </div>
      <div className="product-inventory">{inventory} REMAINING</div>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product

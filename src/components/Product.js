import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className="product-item-info">
    <img className="product-image" alt={title} src={"/assets/images/" + title.toLowerCase() + ".svg"} />
    <div className="product-title">{title}</div>
    <div className="product-price">&#36;{price}</div>
    <div className="product-inventory">{inventory} REMAINING</div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product

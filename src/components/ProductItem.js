import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product-item-container" style={{ marginBottom: 20 }}>
    <img className="product-image" alt={product.title} src={"/assets/images/" + product.title.toLowerCase() + ".svg"} />
    <div className="product-column-1">
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <button
        className="product-button"
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'ADD TO CART' : 'SOLD OUT'}
      </button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem

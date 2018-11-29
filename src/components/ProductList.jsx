// Component for mapping out ProductCard component with passed-in product list

import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ProductCard from './ProductCard'

const Container = styled.div`
  margin: 0 auto;
  width: 75vw;
  .product-list-card-container {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
  }
  .product-list-header {
   color: #E20031 ;
   font-family: Glacial Indifference;
   font-weight: 700
   font-size: 30px;
   line-height: 39px;
   margin-bottom: 0;
   text-align: left;
   font-style: italic;
  }
  .product-list-subheader{
    font-size: 16px;
  }
  a{
    color: #E20031 ;
  };
  .product-list-subheader{
    margin-left: 30px
  }
`
class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shopDropdown: 'sort by',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    //TODO: Work on Method
    //PROP METHOD GOES HERE
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    console.log('what does the state look like', this.state)
    const header = this.props.catalog ? 'Shop All' : 'Fresh Picks'
    const subheader = this.props.catalog ? (
      <form htmlFor="shopDropdown">
        <select
          name="shopDropdown"
          id="shopDropdown"
          onChange={this.handleChange}
          value={this.state.shopDropdown}
        >
          <option value="sortBy">Sort by</option>
          <option value="featured">Featured</option>
          <option value="recentlyAdded">Recently Added</option>
          <option value="rating">Rating</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </form>
    ) : (
      <Link to="/">
        <u>
          <i>
            <small>
              <span className="product-list-subheader">Show all</span>
            </small>
          </i>
        </u>
      </Link>
    )
    let products = this.props.products.map(product => (
      <ProductCard
        className="ProductCard"
        key={product.node.id}
        product={product.node}
      />
    ))

    // Section title and link to be refactored to be dynamic
    return (
      <Container>
        <p className="product-list-header">
          Fresh picks{' '}
          <Link to="/">
            <span className="product-list-subheader">Shop all</span>
          </Link>
        </p>
        <div className="product-list-card-container">{products}</div>
      </Container>
    )
  }
}

export default ProductList

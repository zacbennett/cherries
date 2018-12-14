import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { ProductCard } from '../atoms'
import { navigate } from '@reach/router'

const Container = styled.div`
  margin: 0 auto;
  width: 75vw;
  padding: 2rem;
  .product-list-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .product-list-header {
    color: #e20031;
    font-family: Glacial Indifference;
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    margin-bottom: 0;
    text-align: left;
    font-style: italic;
  }
  .product-list-subheader {
    font-size: 16px;
    margin-left: 30px;
  }
  a {
    color: #e20031;
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
    this.setState({ [evt.target.name]: evt.target.value }, () =>
      this.props.handleSort(this.state.shopDropdown)
    )
  }

  render() {
    const header = this.props.catalog ? 'Shop All' : this.props.title
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
      <Link to={`/catalog?search=${header}`}>
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

    return (
      <Container>
        <p className="product-list-header">
          {header}
          <span className="product-list-subheader">{subheader}</span>
        </p>
        <div className="product-list-card-container">{products}</div>
      </Container>
    )
  }
}

export default ProductList

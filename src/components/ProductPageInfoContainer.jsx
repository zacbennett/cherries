// Component for mapping out ProductCard component with passed-in product list

import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ProductPageProductInfo from './atoms/ProductPageProductInfo'
import ProductPageProductOrder from './atoms/ProductPageProductOrder'
// import ProductPageProductDetails from './ProductPageProductDetails'

const Container = styled.div``

class ProductPageInfoContainer extends Component {
  render() {
    // Renders info, order and detail for the product based on query
    return (
      <Container>
        <ProductPageProductInfo />
        <ProductPageProductOrder />
        {/* <ProductPageProductDetails />  */}
      </Container>
    )
  }
}

export default ProductPageInfoContainer

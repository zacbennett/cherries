import React, { Component } from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import { ProductPageProductInfo, ProductPageProductOrder } from './atoms'
=======
import ProductPageProductInfo from './atoms/ProductPageProductInfo'
import ProductPageProductOrder from './atoms/ProductPageProductOrder'
>>>>>>> 9ef1dc50a1fb8eae7fd865ba4a2acb65bf9339cd
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

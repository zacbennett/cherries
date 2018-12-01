import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: block;

  float: left;
  width: 409px;
  #product-title {
    font-size: 30px;
    font-weight: bold;
  }
`
class ProductPageProductInfo extends Component {
  static defaultProps = {
    title: 'Blue Medium Hoops',
    productCopy:
      "The party perfect pair on every it list this season have arrived. Boasting a luxe resin palette, a chic smattering of crystal and a floral silhouette, we just know you'll reach for the Perla Drop Earrings again and again.",
  }

  render() {
    return (
      <Container>
        <div>
          <h1 id="product-title">{this.props.title}</h1>
          <p>{this.props.productCopy}</p>
        </div>
      </Container>
    )
  }
}

export default ProductPageProductInfo

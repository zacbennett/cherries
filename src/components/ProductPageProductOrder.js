// Component for rendering individual product cards

import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
`

// Renders product information and first image from connected contentful data
class ProductPageProductOrder extends Component {
  render() {
    return (
      <Container>
        <form>
          {/* Make these values dynamic with contentful */}
          <input type="radio" name="paymentOption" value="oneTime" />
          <label for="one-time-purchase">One-Time Purchase: $30</label>

          <input type="radio" name="paymentOption" value="subscribe" />
          <label for="subscribe">Subscribe and Save: $10/month</label>
        </form>
      </Container>
    )
  }
}

export default ProductPageProductOrder

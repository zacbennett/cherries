import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
`

class ProductOrder extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('what are the props, zac?????', this.props)
    return (
      <Container>
        <form>
          <div>
            <input type="radio" name="paymentOption" value="oneTime" />
            <label for="one-time-purchase">
              {' '}
              One-Time Purchase:{' '}
              <span onClick={this.props.handleAdjust}>{`${
                this.props.price
              }`}</span>
            </label>
          </div>
          <input type="radio" name="paymentOption" value="subscribe" />
          <label for="subscribe"> Subscribe and Save: $10/month</label>
        </form>
      </Container>
    )
  }
}

export default ProductOrder

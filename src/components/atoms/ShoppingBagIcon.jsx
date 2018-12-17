import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.5rem;
  margin-left: 0.2rem;
  margin-top: 0.8rem;
  img {
    height: 1.6rem;
  }
  p {
    position: relative;
    cursor: pointer;
    margin: 0;
    padding: 0;
    right: 0.6rem;
    width: 0.9rem;
    height: 0.9rem;
    color: white;
    line-height: 0.9rem;
    font-size: 0.65rem !important;
    border-radius: 1000px;
    background-color: #e20031;
    text-align: center;
    font-weight: bold;
  }

  @media (max-width: 420px) {
    img {
      height: 1.6rem;
    }
  }
`

class ShoppingBagIcon extends Component {
  render() {
    const { click, cart, cartIcon } = this.props
    const cartQuantity = cart.reduce((acc, val) => {
      return acc + val.quantity
    }, 0)
    return (
      <Container>
        <img src={cartIcon} alt="cart-icon" onClick={click} />
        <p onClick={click}>{cartQuantity}</p>
      </Container>
    )
  }
}

export default ShoppingBagIcon

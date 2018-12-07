import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.5rem;
  margin-left: 0.2rem;
  margin-top: 0.8rem;
  img {
    height: 1.5rem;
  }
  p {
    position: relative;
    cursor: pointer;
    margin: 0;
    padding: 0;
    right: 0.8rem;
    width: 1.1rem;
    height: 1.1rem;
    color: white;
    line-height: 1.2rem;
    font-size: 0.65rem !important;
    border-radius: 1000px;
    background-color: #e20031;
    text-align: center;
  }
`

class ShoppingBagIcon extends Component {
  render() {
    const { click, cart, cartIcon } = this.props
    return (
      <Container>
        <img src={cartIcon} alt="cart-icon" onClick={click} />
        <p onClick={click}>{cart.length}</p>
      </Container>
    )
  }
}

export default ShoppingBagIcon

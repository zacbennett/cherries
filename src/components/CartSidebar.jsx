import React, { Component } from 'react'
import styled from 'styled-components'
import {
  CartSidebarHeader,
  CartSidebarBody,
  CartSidebarFooter,
} from './molecules'
import postLambda from '../utilities/postLambda'
import 'animate.css'

const Container = styled.div`
  display: ${({ displayFix }) => displayFix || 'none'};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  width: 23rem;
  height: 100%;
  background-color: #fbe5e9;
  font-family: Montserrat;
  p {
    text-align: center;
  }
  .contents {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`

class CartSidebar extends Component {
  handleAdjust = e => {
    let i = parseInt(e.target.dataset.id)
    if (e.target.className === 'add') {
      let newVal = this.props.cart[i].quantity + 1
      this.props.handleCart('edit', 'quantity', newVal, i)
    } else {
      let newVal = this.props.cart[i].quantity - 1
      if (newVal < 1) newVal = 1
      this.props.handleCart('edit', 'quantity', newVal, i)
    }
  }

  handleCheckout = e => {
    this.props.handleSidebar()
    const items = this.props.cart.map(item => {
      return {
        variantId:
          'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNjQ0NzE5NjEwMjc1Ng==',
        // variantId: '16447196102756',
        // variantId: item.sku,
        quantity: item.quantity,
      }
    })
    console.log('handleCheckout items', items)
    const hasAccount = this.props.curUser ? true : false
    postLambda('createCheckout', {
      items,
      hasAccount,
      user: this.props.curUser,
    }).then(res => {
      window.location.replace(res.data.data.webUrl)
      this.props.handleCart('clear')
    })
  }
  render() {
    const { cart, cartIcon, handleCart, handleSidebar, display } = this.props
    const animation = 'animated ' + (display ? 'slideInRight' : 'slideOutRight')
    const displayFix = this.props.displayFix ? 'inital' : 'none'

    return (
      <Container className={animation} displayFix={displayFix}>
        <div className="contents">
          <CartSidebarHeader
            handleSidebar={handleSidebar}
            cartIcon={cartIcon}
            cart={cart}
          />
          <CartSidebarBody
            cart={cart}
            handleCart={handleCart}
            handleAdjust={this.handleAdjust}
          />
          <CartSidebarFooter cart={cart} handleCheckout={this.handleCheckout} />
        </div>
      </Container>
    )
  }
}

export default CartSidebar

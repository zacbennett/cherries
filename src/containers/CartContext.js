import React, { Component } from 'react'
import Cart from '../utilities/cart'

export const CartContext = React.createContext()

export class CartProvider extends Component {
  state = {
    cart: [],
  }

  handleCart = (cartFunc, ...args) => {
    switch (cartFunc) {
      case 'add':
        Cart.addItem(this, ...args)
        break
      case 'edit':
        Cart.editItem(this, ...args)
        break
      case 'remove':
        Cart.removeItem(this, ...args)
        break
      case 'clear':
        Cart.clearCart(this)
        break
      default:
        console.error('incorrect usage')
        break
    }
  }

  render() {
    console.log('cartContext', this.state.cart)
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          setState: this.setState.bind(this),
          handleCart: this.handleCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    )
  }
}

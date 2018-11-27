import React, { Component } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavButtons, BannerPromo } from './molecules'
import CartSidebar from './CartSidebar.jsx'
import MobileSidebar from './MobileSidebar.jsx'
import { CartConsumer } from '../containers/CartContext'
import 'futura-font/styles.css'

const NavContainer = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

class Navbar extends Component {
  //TODO: Mobile work
  // state = {
  //   mobileSidebar: false,
  //   mobileDisplayFix: false,
  // }
  static contextTypes = {
    firebase: PropTypes.object,
  }
  render() {
    const {
      curUser,
      sidebar,
      displayFix,
      handleSidebar,
      handleBannerMargin,
    } = this.props
    //TODO: Mobile work
    // const { mobileSidebar, mobileDisplayFix } = this.state
    return (
      <div>
        {/* //TODO: Mobile work
        <MobileSidebar
          display={mobileSidebar}
          handleMobileSidebar={this.handleMobileSidebar}
          logOut={this.logOut}
          curUser={curUser}
          handleSidebar={handleSidebar}
          mobileDisplayFix={mobileDisplayFix}
        /> */}
        <NavContainer>
          <BannerPromo handleBannerMargin={handleBannerMargin} />
          <NavButtons
            curUser={curUser}
            handleMobileSidebar={this.handleMobileSidebar}
            handleSidebar={handleSidebar}
            logOut={this.logOut}
          />
        </NavContainer>
        <CartConsumer>
          {cartContext => (
            <CartSidebar
              cart={cartContext.cart}
              handleCart={cartContext.handleCart}
              curUser={curUser}
              display={sidebar}
              handleSidebar={handleSidebar}
              displayFix={displayFix}
            />
          )}
        </CartConsumer>
      </div>
    )
  }
}

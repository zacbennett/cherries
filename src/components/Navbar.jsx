import React, { Component } from 'react'
import Styled from 'styled-components'
import BannerPromo from './molecules/BannerPromo'
import NavButtons from './molecules/NavButtons'

/** Overview of NavBar component:
 *  - Created a styled div NavContainer which wraps our NavBar
 *  - NavBar renders NavButtons and Banner Promo
 *
 */

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

class NavBar extends Component {
  render() {
    return (
      <NavContainer>
        <BannerPromo />
        <NavButtons />
      </NavContainer>
    )
  }
}

export default NavBar

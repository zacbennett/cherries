import React, { Component } from 'react'
import styled from 'styled-components'
import { IoIosClose } from 'react-icons/io'
import { DropdownMenu, ShoppingBagIcon } from '../atoms'

import { navigate } from '@reach/router'
import { SideNav } from '../'

const Container = styled.div`
  width: 100%;
  padding: 1rem;

  .popup {
    z-index: 10;
    position: fixed;
    width: 100vw;
    height: 300px;
  }
  .popupInner {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    width: 75%;
  }

  .grayed-out {
    animation: fadein 0.3s;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  #close-button {
    width: 3rem;
    height: 3rem;
  }
`

class SideBarMobile extends Component {
  constructor(props) {
    super(props)
  }

  //handleClick will call togglePopup which will change state of parent component NavButtons
  handleClick = () => {
    this.props.toggleShowSideBarMobile()
  }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   navigate(`/catalog?search=${this.state.search}`)
  //   this.props.togglePopup()
  // }

  render() {
    const style = {
      display: 'flex',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(255,226,226, 0.9)',
      zIndex: 100,
    }
    return (
      <Container>
        <div className="grayed-out" style={style}>
          <div>
            <IoIosClose id="close-button" onClick={this.handleClick} />
          </div>
          <DropdownMenu
            links={this.props.helpLinks}
            icon={this.props.helpIcon}
          />
          <DropdownMenu
            links={this.props.userLinks}
            icon={this.props.userIcon}
          />
          <ShoppingBagIcon
            cart={this.props.cart}
            cartIcon={this.props.cartIcon}
            click={this.props.handleSidebar}
          />
          <SideNav id="sideNav" />
        </div>
      </Container>
    )
  }
}

export default SideBarMobile

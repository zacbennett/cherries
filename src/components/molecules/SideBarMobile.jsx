import React, { Component } from 'react'
import styled from 'styled-components'
import { IoIosClose } from 'react-icons/io'

const Container = styled.div`
  width: 100%;

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

  #nav-container {
    width: 100%;
  }
`

class SideBarMobile extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  //handleClick will call togglePopup which will change state of parent component NavButtons
  handleClick = () => {
    this.props.toggleShowSideBarMobile()
  }

  render() {
    // The following style must be inline, since this is what is passed into the portal. So any styles
    // passed by a styled will not be applied

    const style = {
      display: 'flex',
      position: 'fixed',
      flexFlow: 'wrap',
      justifyContent: 'flex-start',
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
          {/* TODO: Add the Desktop Side Nav with lis for account and FAQ */}
        </div>
      </Container>
    )
  }
}

export default SideBarMobile

import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from '../atoms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .dropdown {
    margin: 0;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fbe5e9;
    border-radius: 2px;
    box-shadow: 1px 1px 10px 0 rgba(46, 61, 73, 0.2);
    margin-top: 2rem;
    padding: 0.5rem;
    animation-duration: 0.5s;
    z-index: 3;
    a {
      padding: 0.2rem;
      font-size: 0.8rem;
    }
    .links {
      display: flex;
      flex-direction: column;
    }
    animation: fadein 0.25s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`

class DropdownMenu extends Component {
  state = {
    display: false,
  }
  showMenu = () => {
    this.setState({ display: true })
  }
  hideMenu = () => {
    this.setState({ display: false })
  }

  render() {
    const display = this.state.display ? 'initial' : 'none'
    const links = this.props.links.map((link, i) => {
      if (link.route) {
        return (
          <NavLink to={link.route} key={link.name}>
            {link.name}
          </NavLink>
        )
      } else {
        return (
          <NavLink to="/" onClick={this.props.logOutUser} key={link.name}>
            {link.name}
          </NavLink>
        )
      }
    })
    return (
      <Container onMouseLeave={this.hideMenu}>
        <NavLink className="dropdown" onMouseEnter={this.showMenu} to="">
          <img
            style={{
              margin: 5,
              maxWidth: 28,
              maxHeight: 28,
            }}
            src={this.props.icon}
            alt="nav-bar-icon"
          />
        </NavLink>
        <div className="dropdown-content" style={{ display: display }}>
          <div className="links">{links}</div>
        </div>
      </Container>
    )
  }
}

export default DropdownMenu

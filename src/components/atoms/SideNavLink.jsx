import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from '../atoms'

const Container = styled.div`
  ul.side-navbar-dropdown {
    list-style: none;
  }

  .side-navbar-dropdown-link {
    margin-left: 25px;
    margin-top: 10px;
    a {
      font-size: 0.8rem;
    }
  }

  li.side-navbar-dropdown-link > a,
  a:visited {
    color: #47525e;
  }
`
class SideNavLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  //when links are clicked state will change and dropdown will be shown
  toggleMenu(evt) {
    evt.preventDefault()
    this.setState(st => ({
      display: !st.display,
    }))
  }

  //render NavLinks - dropdown menu will be a ul that renders different li's depending on props passed down from SideNav
  render() {
    const display = this.state.display ? 'initial' : 'none'
    return (
      <Container>
        <li key={this.props.name} className="side-navbar-link">
          <NavLink onClick={this.toggleMenu}>
            {this.props.name} {!this.state.display ? <>+</> : <>-</>}
          </NavLink>
          <ul className="side-navbar-dropdown" style={{ display: display }}>
            {this.props.dropDown.map((li, i) => {
              return (
                <li key={li.name} className="side-navbar-dropdown-link">
                  <NavLink to={`/catalog?search=${li.name}`}>{li.name}</NavLink>
                </li>
              )
            })}
          </ul>
        </li>
      </Container>
    )
  }
}

export default SideNavLink

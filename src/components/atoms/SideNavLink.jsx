import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import NavLink from '../atoms/NavLink'

/** Overview of NavButtons component:
 *  -
 */

const Container = styled.div`
  ul.side-navbar-dropdown {
    list-style: none;
  }

  li.side-navbar-dropdown-link {
    margin-left: 25px;
    margin-top: 10px;
  }

  li.side-navbar-dropdown-link > a,
  a:visited {
    color: #47525e;
  }
`
//Use the way constructor and normal bind
class SideNavLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(evt) {
    evt.preventDefault()
    this.setState(st => ({
      display: !st.display,
    }))
  }

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
                  <NavLink to={li.route}>{li.name}</NavLink>
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

import React, { Component } from 'react'
import styled from 'styled-components'
import ShoppingBagIcon from '../atoms/ShoppingBagIcon'
import { Link } from 'gatsby'
import NavLink from '../atoms/NavLink'
import DropdownMenu from '../atoms/DropdownMenu'

/** Overview of NavButtons component:
 *  -
 */

const Container = styled.div`
  .dropdownContent {
    display: none;
  }
  .dropdownContent > * {
    margin-left: 25px;
  }
  ul {
    list-style: none;
  }
  .hyphen {
    margin-left: 7px;
  }
`
//Use the way constructor and normal bind
class SideNav extends Component {
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
    const links = this.props.links.map((link, i) => {
      if (link.name === '-') {
        return (
          <li
            style={{ textDecoration: 'none', color: '#e20031' }}
            className="hyphen"
          >
            {link.name}
          </li>
        )
      }
      if (!link.dropDown) {
        return (
          <li>
            <NavLink
              style={{ textDecoration: 'none', color: '#e20031' }}
              key={i}
              to={link.route}
            >
              {link.name}
            </NavLink>
          </li>
        )
      } else {
        return (
          <li>
            <NavLink
              style={{ textDecoration: 'none', color: '#e20031' }}
              key={i}
              onClick={this.toggleMenu}
            >
              {link.name} +
            </NavLink>
            <ul className="dropdownContent" style={{ display: display }}>
              {link.dropDown.map((li, i) => {
                return (
                  <li>
                    <NavLink
                      style={{ textDecoration: 'none', color: '#47525E' }}
                      key={i}
                      to={li.route}
                    >
                      {li.name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      }
    })
    return (
      <Container>
        <ul>{links}</ul>
      </Container>
    )
  }
}

export default SideNav

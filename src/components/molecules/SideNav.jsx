import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink, SideNavLink } from '../atoms'

const Container = styled.div`
  #side-navbar-list {
    list-style: none;
  }
  #side-navbar-list li.side-navbar-link,
  a,
  a:visited {
    margin-bottom: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #e20031;
  }
  .hyphen {
    margin-left: 7px;
  }
`
class SideNav extends Component {
  render() {
    const links = this.props.links.map((link, i) => {
      if (link.name === '-') {
        return (
          <li key={link.name} className="hyphen side-navbar-link">
            {link.name}
          </li>
        )
      }
      if (!link.dropDown) {
        return (
          <li className="side-navbar-link" key={link.name}>
            <NavLink key={i} to={link.route}>
              {link.name}
            </NavLink>
          </li>
        )
      } else {
        return (
          <SideNavLink
            key={link.name}
            name={link.name}
            dropDown={link.dropDown}
          />
        )
      }
    })
    return (
      <Container>
        <ul id="side-navbar-list">{links}</ul>
      </Container>
    )
  }
}

export default SideNav

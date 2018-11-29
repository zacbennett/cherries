import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink, SideNavLink } from '../atoms'

const Container = styled.div`
  ul {
    list-style: none;
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
          <li
            style={{
              textDecoration: 'none',
              color: '#e20031',
              fontWeight: 'bold',
            }}
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
              style={{
                textDecoration: 'none',
                color: '#e20031',
                fontWeight: 'bold',
              }}
              key={i}
              to={link.route}
            >
              {link.name}
            </NavLink>
          </li>
        )
      } else {
        return <SideNavLink name={link.name} dropDown={link.dropDown} />
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

import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink, SideNavLink } from './atoms'
import { StaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  position: fixed;
  margin-top: 3rem;
  z-index: 1;
  overflow: auto;
  height: 70vh;
  #side-navbar-list {
    list-style: none;
  }
  .side-navbar-link {
    font-size: 0.7rem;
  }
  #side-navbar-list li.side-navbar-link,
  a,
  a:visited {
    margin-bottom: 20px;
    text-decoration: none;
    font-weight: 900;
    font-size: 1rem;
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

export default () => (
  <StaticQuery
    query={graphql`
      {
        contentfulHomePage(pageTitle: { eq: "Home Page" }) {
          sideNavBar {
            data {
              name
              displayed
              route
              dropDown {
                name
                route
              }
            }
          }
        }
      }
    `}
    render={data => <SideNav links={data.contentfulHomePage.sideNavBar.data} />}
  />
)

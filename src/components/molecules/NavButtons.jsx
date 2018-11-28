import React, { Component } from 'react'
import styled from 'styled-components'
import ShoppingBagIcon from '../atoms/ShoppingBagIcon'
import { Link } from 'gatsby'
import { FaRegUser, FaBars, FaRegQuestionCircle } from 'react-icons/fa'
// import NavLink from '../atoms/NavLink'
import DropdownMenu from '../atoms/DropdownMenu'

/** Overview of NavButtons component:
 *  - Created a styled div container that wraps the NavButtons
 *  - Created two constants that act as links for two diff dropdown menus (Help and Signin). These will be passed down as props to DropdownMenu component
 *  - This component renders the two dropdown menus, the cherries icon, and a search button
 *
 *  - TODO: Make this dynamic by allowing Contentful to get buttons and icons
 *
 */

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  padding-top: 0.3rem;
  background-color: white;
  margin: 0;
  a {
    margin-right: 0.7rem;
  }
  .hamburger {
    display: none;
  }
  .leftNav {
    display: flex;
    align-items: center;
    flex-basis: 45%;
    padding-left: 1rem;
  }
  .logo {
    display: flex;
    justify-content: center;
    flex-basis: 10%;
  }
  .rightNav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 45%;
  }
  @media (max-width: 420px) {
    width: 100%;
    padding: 1rem;
    padding-right: 0rem;
    min-width: 0px;
    position: sticky;
    background-color: #f7f7f7;
    top: 0;
    img {
      width: 9rem;
    }
    div {
      padding: 0rem;
    }
    svg {
      height: 2rem;
    }
    .leftNav {
      flex-basis: 20%;
      width: 100%;
      padding-left: 0rem;
      a {
        display: none;
      }
      .hamburger {
        display: initial;
      }
    }
    .logo {
      flex-basis: 55%;
    }
    .rightNav {
      flex-basis: 25%;
      div:nth-child(1) {
        display: none;
      }
      div:nth-child(2) {
        display: none;
      }
    }
  }
`

class NavButtons extends Component {
  render() {
    // const { handleMobileSidebar, handleSidebar, curUser, logOut } = this.props

    const userLinks = this.props.userLinks[0].dropdownLinks
    const helpLinks = this.props.helpLinks[0].dropdownLinks
    console.log('USERLINKS', userLinks)
    return (
      <Container>
        <div className="leftNav">
          <img
            style={{
              margin: 10,
              maxWidth: 28,
              maxHeight: 28,
            }}
            src={this.props.searchIcon}
            alt="search-icon"
          />
        </div>
        <div className="logo">
          <Link to="/">
            <img
              style={{
                margin: '0 auto',
                maxWidth: 48,
                maxHeight: 48,
              }}
              src={this.props.cherriesIcon}
              alt="Cherries Logo"
            />
          </Link>
        </div>
        <div className="rightNav">
          <DropdownMenu links={helpLinks} icon={this.props.helpIcon} />
          <DropdownMenu links={userLinks} icon={this.props.userIcon} />
          <ShoppingBagIcon cartIcon={this.props.cartIcon} />
        </div>
      </Container>
    )
  }
}

let user = {
  data: [
    {
      icon: true,
      dropdown: true,
      navButton: 'userLinksNoUser',
      dropdownLinks: [
        { text: 'Sign Up', page: 'signup' },
        { text: 'Log In', page: 'login' },
      ],
    },
    {
      icon: true,
      dropdown: true,
      navButton: 'userLinksUser',
      dropdownLinks: [
        { text: 'Account', page: 'account' },
        { text: 'Log Out', page: 'logout' },
      ],
    },
  ],
}

export default NavButtons

import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ModalLayout from '../layouts/ModalLayout'
import { DropdownMenu, ShoppingBagIcon } from '../atoms'
import SearchModal from './SearchModal'
import SideBarMobile from './SideBarMobile'

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
    img:hover {
      opacity: 0.7;
      cursor: pointer;
    }
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
  // Want to ensure that the icon is hidden when screen is above 420px
  // .rightNavHamburger {
  //   display: none;
  // }
  @media (max-width: 420px) {
    .rightNav {
      display: none;
    }
    .rightNavHamburger {
      display: static;
      flex-basis: 25%;
    }
    #hamburgerIcon {
      height: 28px;
      margin-bottom: 0rem;
    }
  }
`

class NavButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      showSideBarMobile: false,
    }
    this.togglePopup = this.togglePopup.bind(this)
    this.toggleShowSideBarMobile = this.toggleShowSideBarMobile.bind(this)
  }

  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup })
  }
  toggleShowSideBarMobile() {
    this.setState({ showSideBarMobile: !this.state.showSideBarMobile })
  }
  render() {
    const {
      searchIcon,
      cherriesIcon,
      helpIcon,
      userIcon,
      cartIcon,
      cart,
      handleSidebar,
    } = this.props
    //Get user links and help links that are passed down as props from NavBar - come from contentful
    const userLinks = this.props.userLinks[0].dropdownLinks
    const helpLinks = this.props.helpLinks[0].dropdownLinks
    return (
      <Container>
        {this.state.showPopup ? (
          <ModalLayout>
            <SearchModal
              searchIcon={this.props.searchIcon}
              togglePopup={this.togglePopup}
            />
          </ModalLayout>
        ) : null}
        <div className="leftNav">
          <img
            style={{
              margin: 10,
              maxWidth: 28,
              maxHeight: 28,
            }}
            src={searchIcon}
            alt="search-icon"
            onClick={this.togglePopup}
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
              src={cherriesIcon}
              alt="Cherries Logo"
            />
          </Link>
        </div>
        <div className="rightNav">
          <DropdownMenu links={helpLinks} icon={helpIcon} />
          <DropdownMenu links={userLinks} icon={userIcon} />
          <ShoppingBagIcon
            cart={cart}
            cartIcon={cartIcon}
            click={handleSidebar}
          />
        </div>
        <div className="rightNavHamburger">
          <img
            id="hamburgerIcon"
            src="https://css-tricks.com/wp-content/uploads/2012/10/threelines.png"
            onClick={this.toggleShowSideBarMobile}
          />
        </div>
        {this.state.showSideBarMobile ? (
          <ModalLayout>
            <SideBarMobile
              toggleShowSideBarMobile={this.toggleShowSideBarMobile}
              cart={cart}
              cartIcon={cartIcon}
              click={handleSidebar}
              helpLinks={helpLinks}
              helpIcon={helpIcon}
              userLinks={userLinks}
              userIcon={userIcon}
            />
          </ModalLayout>
        ) : null}
      </Container>
    )
  }
}

export default NavButtons

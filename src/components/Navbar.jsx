import React, { Component } from 'react'
import Styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { BannerPromo, NavButtons } from './molecules'
import CartSidebar from './CartSidebar'
import { UserContext } from '../containers/UserContext'
import { CartContext } from '../containers/CartContext'

const Container = Styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  font-family: Montserrat;
  a{
    text-decoration: none;
  }
`

// Refactored Navbar to be a component rendered by StaticQuery (instead of putting definition directly in StaticQuery render)

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebar: false,
      displayFix: false,
    }
    this.handleSidebar = this.handleSidebar.bind(this)
  }

  handleSidebar = () => {
    this.setState(st => ({
      sidebar: !st.sidebar,
      displayFix: true,
    }))
  }

  render() {
    const { data } = this.props
    const { sidebar, displayFix } = this.state
    return (
      <Container>
        <UserContext.Consumer>
          {userContext => (
            <CartContext.Consumer>
              {cartContext => (
                <>
                  <BannerPromo
                    bannerText={data.contentfulHomePage.bannerPromoText}
                    bannerTitle={data.contentfulHomePage.bannerPromoTitle}
                  />
                  <NavButtons
                    helpIcon={data.contentfulHomePage.navHelpIcon.fluid.src}
                    userIcon={data.contentfulHomePage.navUserIcon.fluid.src}
                    searchIcon={data.contentfulHomePage.navSearchIcon.fluid.src}
                    cartIcon={data.contentfulHomePage.navCartIcon.fluid.src}
                    cherriesIcon={
                      data.contentfulHomePage.navCherriesIcon.fluid.src
                    }
                    userLinks={data.contentfulHomePage.userLinks.data}
                    helpLinks={data.contentfulHomePage.helpLinks.data}
                    handleSidebar={this.handleSidebar}
                    cart={cartContext.cart}
                  />
                  <CartSidebar
                    cart={cartContext.cart}
                    handleCart={cartContext.handleCart}
                    curUser={userContext.curUser}
                    display={sidebar}
                    handleSidebar={this.handleSidebar}
                    displayFix={displayFix}
                    cartIcon={data.contentfulHomePage.navCartIcon.fluid.src}
                  />
                </>
              )}
            </CartContext.Consumer>
          )}
        </UserContext.Consumer>
      </Container>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        contentfulHomePage(pageTitle: { eq: "Home Page" }) {
          navHelpIcon {
            fluid {
              src
            }
          }
          navUserIcon {
            fluid {
              src
            }
          }
          navCartIcon {
            fluid {
              src
            }
          }
          navSearchIcon {
            fluid {
              src
            }
          }
          navCherriesIcon {
            fluid {
              src
            }
          }
          bannerPromoText
          bannerPromoTitle
          userLinks {
            data {
              dropdownLinks {
                name
                route
              }
            }
          }
          helpLinks {
            data {
              dropdownLinks {
                name
                route
              }
            }
          }
        }
      }
    `}
    render={data => <Navbar data={data} />}
  />
)

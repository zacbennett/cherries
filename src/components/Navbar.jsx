import React, { Component } from 'react'
import Styled from 'styled-components'
import BannerPromo from './molecules/BannerPromo'
import NavButtons from './molecules/NavButtons'
import { StaticQuery, graphql } from 'gatsby'

/** Overview of NavBar component:
 *  - Created a styled div NavContainer which wraps our NavBar
 *  - NavBar renders NavButtons and Banner Promo
 *
 */

const NavContainer = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

// class NavBar extends Component {
//   render() {
//     return (
//       <NavContainer>
//         <BannerPromo />
//         <NavButtons />
//       </NavContainer>
//     )
//   }
// }

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
    render={data => (
      <NavContainer>
        <BannerPromo
          bannerText={data.contentfulHomePage.bannerPromoText}
          bannerTitle={data.contentfulHomePage.bannerPromoTitle}
        />
        <NavButtons
          helpIcon={data.contentfulHomePage.navHelpIcon.fluid.src}
          userIcon={data.contentfulHomePage.navUserIcon.fluid.src}
          searchIcon={data.contentfulHomePage.navSearchIcon.fluid.src}
          cartIcon={data.contentfulHomePage.navCartIcon.fluid.src}
          cherriesIcon={data.contentfulHomePage.navCherriesIcon.fluid.src}
          userLinks={data.contentfulHomePage.userLinks.data.dropdownLinks}
          helpLinks={data.contentfulHomePage.helpLinks.data.dropdownLinks}
        />
      </NavContainer>
    )}
  />
)

// export default NavBar

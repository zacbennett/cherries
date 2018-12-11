import React from 'react'
import Styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { BannerPromo, NavButtons } from './molecules'

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

export const PureNavbar = ({ data }) => (
  <Container>
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
      userLinks={data.contentfulHomePage.userLinks.data}
      helpLinks={data.contentfulHomePage.helpLinks.data}
    />
  </Container>
)

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
      <Container>
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
          userLinks={data.contentfulHomePage.userLinks.data}
          helpLinks={data.contentfulHomePage.helpLinks.data}
        />
      </Container>
    )}
  />
)

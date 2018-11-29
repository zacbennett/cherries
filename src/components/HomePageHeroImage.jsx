// Componet for rendering hero image, message, and link on homepage

import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import HomePageButton from './atoms/HomePageButton'

const Container = styled.div`
  position: relative;
  #hero-image {
    width: 100vw;
    height: 431.97px;
    object-fit: cover;
  }
  #hero-image-text-container {
    position: absolute;
    top: 30%;
    left: 13%;
    width: 308px;
  }
  #hero-image-text {
    font-size: 26px;
    color: #e20031;
    width: 100%;
    margin: 15px 0px;
    padding: 0px 10px;
  }
`

// Connect to contentful for hero image information
export default () => (
  <StaticQuery
    query={graphql`
      {
        contentfulHomePage(pageTitle: { eq: "Home Page" }) {
          heroImage {
            file {
              url
            }
          }
          heroImageText
          heroImageButtonText
        }
      }
    `}
    render={data => {
      const contentfulData = data.contentfulHomePage
      const heroImage = contentfulData.heroImage.file.url
      const heroImageText = contentfulData.heroImageText
      const heroImageButtonText = contentfulData.heroImageButtonText

      return (
        <Container>
          <img id="hero-image" src={heroImage} alt="hero-image" />
          <div id="hero-image-text-container">
            <h4 id="hero-image-text">{heroImageText}</h4>
            <HomePageButton buttonText={heroImageButtonText} />
          </div>
        </Container>
      )
    }}
  />
)

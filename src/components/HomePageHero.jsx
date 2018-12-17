import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { HomePageButton } from './atoms'

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

  @media (max-width: 420px) {
    #hero-image-text-container {
      position: static;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #hero-image-text {
      text-align: center;
    }
  }
`
// This is for testing purposes only!
export const PureHomePageHero = ({ data }) => (
  <Container>
    <img
      id="hero-image"
      src={data.contentfulHomePage.contentfulData.heroImage.file.url}
      alt="hero"
    />
    <div id="hero-image-text-container">
      <h4 id="hero-image-text">
        {data.contentfulHomePage.contentfulData.heroImageText}
      </h4>
      <HomePageButton />
    </div>
  </Container>
)

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
        }
      }
    `}
    render={data => {
      const contentfulData = data.contentfulHomePage
      const heroImage = contentfulData.heroImage.file.url
      const heroImageText = contentfulData.heroImageText

      return (
        <Container>
          <img id="hero-image" src={heroImage} alt="hero" />
          <div id="hero-image-text-container">
            <h4 id="hero-image-text">{heroImageText}</h4>
            <HomePageButton />
          </div>
        </Container>
      )
    }}
  />
)

import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

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
  #hero-image-button {
    background-color: #e20031;
    color: white;
    text-transform: uppercase;
    padding: 10px 30px;
    font-size: 23px;
    border: none;
    width: 100%;
    cursor: pointer;
  }
`

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
          heroImageButtonLink
        }
      }
    `}
    render={data => {
      const contentfulData = data.contentfulHomePage
      const {
        heroImage,
        heroImageText,
        heroImageButtonLink,
        heroImageButtonText,
      } = contentfulData

      return (
        <Container>
          <img id="hero-image" src={heroImage} alt="Hero of Pretty Lady" />
          <div id="hero-image-text-container">
            <h4 id="hero-image-text">{heroImageText}</h4>
            <Link to={heroImageButtonLink}>
              <button id="hero-image-button">{heroImageButtonText}</button>
            </Link>
          </div>
        </Container>
      )
    }}
  />
)

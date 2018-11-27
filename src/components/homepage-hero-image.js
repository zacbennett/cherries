import React from 'react'
import styled from 'styled-components'
import heroImage from '../images/homepage-hero-image.png'

// Refactor to have the color be dynamic
const Container = styled.div`
  #hero-image-container {
    position: relative;
  }
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
    padding: 10px 30px 
    font-size: 23px;
    border: none;
    width: 100%;
  }
  
`

export default () => (
  <Container>
    <div id="hero-image-container">
      {/* Change below to get text from contentful */}
      <img id="hero-image" src={heroImage} alt="hero-image" />
      <div id="hero-image-text-container">
        <h4 id="hero-image-text">Fresh earrings, hand-picked by you</h4>
        <button id="hero-image-button">Get Started</button>
      </div>
    </div>
  </Container>
)

import React from 'react'
import styled from 'styled-components'

// Refactor to have the color be dynamic
const Container = styled.div`
  #hero-image-container {
    position: relative;
  }
  img {
    width: 100vw;
    height: 250px;
    object-fit: cover;
  }
  #hero-image-text-container {
    position: absolute;
    top: 30%;
    left: 25%;
    width: 175px;
  }
  #hero-image-button {
    background-color: #e20031;
    color: white;
    text-transform: uppercase;
    padding: 5px 30px 5px 30px;
    font-size: 0.7em;
    border: none;
    width: 100%;
  }
  #hero-image-text {
    color: #e20031;
    width: 100%;
    margin: 5px;
  }
`

export default () => (
  <Container>
    <div id="hero-image-container">
      {/* Change below to get text from contentful */}
      <img
        src="https://media.beaut.ie/uploads/2013/10/ariane1.jpg"
        alt="hero-image"
      />
      <div id="hero-image-text-container">
        <h4 id="hero-image-text">Fresh earrings, hand-picked by you</h4>
        <button id="hero-image-button">Get Started</button>
      </div>
    </div>
  </Container>
)

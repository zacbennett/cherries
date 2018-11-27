import React from 'react'
import styled from 'styled-components'

// Refactor to have the color be dynamic 
const Container = styled.div`
  .hero-image-container {
    position: relative;
  }
  img {
    width: 100vw;
    height: 250px;
    object-fit: cover;
  }
  .hero-image-text {
    position: absolute;
    top: 30%;
    left: 25%;
    width: 175px;
  }
  button {
    background-color: #e20031;
    color: white;
    text-transform: uppercase;
    padding: 5px 30px 5px 30px;
    font-size: 0.7em;
    border: none;
    width: 100%;
  }
  h4 {
    color: #e20031;
    width: 100%;
    margin: 5px;
  }
`

export default () => (
  <Container>
    <div className="hero-image-container">
    {/* Change below to get text from contentful */}
      <img
        src="https://media.beaut.ie/uploads/2013/10/ariane1.jpg"
        alt="hero-image"
      />
      <div className="hero-image-text">
        <h4>Fresh earrings, hand-picked by you</h4>
        <button>Get Started</button>
      </div>
    </div>
  </Container>
)

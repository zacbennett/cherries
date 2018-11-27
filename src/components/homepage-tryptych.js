import React from 'react'
import styled from 'styled-components'
import sparkle from '../images/sparkle-emoji.png'
import envelope from '../images/envelope-emoji.png'
import deliveryTruck from '../images/delivery-truck-emoji.png'

// Refactor to have the theme/picture/text be dynamic
const Container = styled.div`
  #tryptych-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #ffe2e2;
    width: 100vw;
    height: 375px;
    padding-bottom: 20px;
  }
  #tryptych-header {
    margin: 25px 0 0px 0;
    color: #e20031;
    font-size: 25px;
    width: 100%;
    text-align: center;
  }
  #tryptych-panel-container {
    display: flex;
    justify-content: space-evenly;
  }
  .tryptych-panel {
    text-align: center;
    // border: 1px solid black;
    width: 220px;
    font-size: 13px;
    font-weight: bold;
  }
  .tryptych-panel-image {
    width: 60px;
    margin: 0 auto;
  }
  .tryptych-panel-text {
    line-height: 1.5em;
  }
  .get-started-button {
    margin: 0 auto;
    background-color: #e20031;
    color: white;
    text-transform: uppercase;
    padding: 5px 30px 5px 30px;
    font-size: 1em;
    border: none;
    width: 220px;
  }
`

export default () => (
  <Container>
    <div id="tryptych-container">
      <h4 id="tryptych-header">
        <i>Jewelry, but make it fun.</i>
      </h4>
      <div id="tryptych-panel-container">
        <div className="tryptych-panel">
          <img src={sparkle} alt="sparkle" className="tryptych-panel-image" />
          <p className="tryptych-panel-text">
            We make cute, unique jewelry for every occasion—that good ish you
            can't get anywhere else.
          </p>
        </div>
        <div className="tryptych-panel">
          <img src={envelope} alt="envelope" className="tryptych-panel-image" />
          <p className="tryptych-panel-text">
            Subscribe to monthly deliveries to save that $$$ and keep your looks
            fresh.
          </p>
        </div>
        <div className="tryptych-panel">
          <img
            src={deliveryTruck}
            alt="truck"
            className="tryptych-panel-image"
          />
          <p className="tryptych-panel-text">
            We offer free shipping to subscribers on all US orders, because we
            got your back girl.
          </p>
        </div>
      </div>
      <button className="get-started-button">Get Started</button>
    </div>
  </Container>
)

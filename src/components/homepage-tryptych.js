import React from 'react'
import styled from 'styled-components'
import sparkle from '../images/sparkle-emoji.png'
import envelope from '../images/envelope-emoji.png'
import deliveryTruck from '../images/delivery-truck-emoji.png'
import TryptychPanel from './tryptychPanel'
import { StaticQuery, graphql, Link } from 'gatsby'

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
  <StaticQuery
    query={graphql`
      {
        contentfulHomePage(pageTitle: { eq: "Home Page" }) {
          tryptychHeaderText
          tryptychPanelImages {
            id
            file {
              url
            }
          }
          tryptychPanelText
        }
      }
    `}
    render={data => {
      const contentfulData = data.contentfulHomePage
      const tryptychHeaderText = contentfulData.tryptychHeaderText
      const tryptychPanelImage = contentfulData.tryptychPanelImages
      const tryptychPanelText = contentfulData.tryptychPanelText

      let panelArr = []

      for (let i = 0; i < tryptychPanelText.length; i++) {
        panelArr.push(
          <TryptychPanel
            key={tryptychPanelImage[i].id}
            imageUrl={tryptychPanelImage[i].file.url}
            imageName={tryptychPanelImage[i].file.fileName}
            text={tryptychPanelText[i]}
          />
        )
      }

      return (
        <Container>
          <div id="tryptych-container">
            <h4 id="tryptych-header">
              {/* HERE */}
              <i>{tryptychHeaderText}</i>
            </h4>
            <div id="tryptych-panel-container">{panelArr}</div>
            <button className="get-started-button">Get Started</button>
          </div>
        </Container>
      )
    }}
  />
)

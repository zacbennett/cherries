import React from 'react'
import styled from 'styled-components'
import { TryptychPanel, HomePageButton } from './atoms'
import { StaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #ffe2e2;
  width: 100vw;
  height: 375px;
  padding-bottom: 20px;
  #tryptych-header {
    margin: 25px 0 0px 0;
    color: #e20031;
    font-size: 25px;
    width: 100%;
    text-align: center;
    font-style: italic;
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
  #tryptych-button-container {
    margin: 0 auto;
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
          tryptychButtonText
        }
      }
    `}
    render={data => {
      const contentfulData = data.contentfulHomePage
      const tryptychHeaderText = contentfulData.tryptychHeaderText
      const tryptychPanelImage = contentfulData.tryptychPanelImages
      const tryptychPanelText = contentfulData.tryptychPanelText
      const tryptychButtonText = contentfulData.tryptychButtonText

      let panelArr = []

      // Loop through all trypytch items and pass information into TryptychPanel component
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
          <h4 id="tryptych-header">{tryptychHeaderText}</h4>
          <div id="tryptych-panel-container">{panelArr}</div>
          <div id="tryptych-button-container">
            <HomePageButton buttonText={tryptychButtonText} />
          </div>
        </Container>
      )
    }}
  />
)

import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { TryptychPanel } from './molecules'
import { HomePageButton } from './atoms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
    width: 70%;
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
    color: #47525e;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        contentfulHomePage(pageTitle: { eq: "Home Page" }) {
          tryptychButtonText
          tryptych {
            content {
              nodeType
              data {
                target {
                  fields {
                    file {
                      en_US {
                        url
                        fileName
                      }
                    }
                  }
                }
              }
              content {
                value
              }
            }
          }
        }
      }
    `}
    render={data => {
      const tryptychButtonText = data.contentfulHomePage.tryptychButtonText
      const tryptychContent = data.contentfulHomePage.tryptych.content
      let tryptychHeader
      let tryptychIcons = []
      let tryptychCopy = []

      // Seperate content into its seperate nodetypes
      tryptychContent.forEach(item => {
        if (item.nodeType === 'heading-4')
          tryptychHeader = item.content[0].value
        else if (item.nodeType === 'embedded-asset-block')
          tryptychIcons.push(item.data.target.fields.file.en_US)
        else if (item.nodeType === 'paragraph')
          tryptychCopy.push(item.content[0].value)
      })

      let tryptychPanels = []
      tryptychIcons.forEach((icon, i) => {
        tryptychPanels.push(
          <TryptychPanel
            key={i}
            imageUrl={icon.url}
            imageName={icon.fileName}
            text={tryptychCopy[i]}
          />
        )
      })
      return (
        <Container>
          <h4 id="tryptych-header">{tryptychHeader}</h4>
          <div id="tryptych-panel-container">{tryptychPanels}</div>
          <HomePageButton buttonText={tryptychButtonText} />
        </Container>
      )
    }}
  />
)

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
  padding: 3rem;
  #tryptych-header {
    color: #e20031;
    font-size: 3rem;
    width: 100%;
    text-align: center;
    font-style: italic;
  }
  #tryptych-panel-container {
    display: flex;
    justify-content: space-evenly;
    width: 70%;
  }
  .tryptych-panel-text {
    line-height: 1.5em;
    color: #47525e;
  }
  @media (max-width: 420px) {
    #tryptych-panel-container {
      width: auto;
      flex-direction: column;
    }
    height: auto;
  }
`

export const PureHomePageTryptych = ({ data }) => {
  const tryptychContent = data.contentfulHomePage.tryptych.content
  let tryptychHeader
  let tryptychIcons = []
  let tryptychCopy = []

  // Seperate content into its seperate nodetypes
  tryptychContent.forEach(item => {
    if (item.nodeType === 'heading-4') tryptychHeader = item.content[0].value
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
      <h2 id="tryptych-header">{tryptychHeader}</h2>
      <div id="tryptych-panel-container">{tryptychPanels}</div>
      <HomePageButton />
    </Container>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        contentfulHomePage(pageTitle: { eq: "Home Page" }) {
          tryptychIcons {
            fluid {
              src
            }
          }
          tryptych {
            content {
              nodeType
              content {
                value
              }
            }
          }
        }
      }
    `}
    render={data => {
      const tryptychContent = data.contentfulHomePage.tryptych.content
      let tryptychHeader
      let tryptychIcons = data.contentfulHomePage.tryptychIcons
      let tryptychCopy = []

      // Seperate content into its seperate nodetypes
      tryptychContent.forEach(item => {
        if (item.nodeType === 'heading-4')
          tryptychHeader = item.content[0].value
        else if (item.nodeType === 'paragraph')
          tryptychCopy.push(item.content[0].value)
      })

      let tryptychPanels = []
      tryptychIcons.forEach((icon, i) => {
        tryptychPanels.push(
          <TryptychPanel
            key={i}
            imageUrl={icon.fluid.src}
            imageName={icon.fileName}
            text={tryptychCopy[i]}
          />
        )
      })
      return (
        <Container>
          <h2 id="tryptych-header">{tryptychHeader}</h2>
          <div id="tryptych-panel-container">{tryptychPanels}</div>
          <HomePageButton />
        </Container>
      )
    }}
  />
)

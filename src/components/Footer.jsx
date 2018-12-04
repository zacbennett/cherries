import React from 'react'
import Styled from 'styled-components'
import { FooterSubscription, FooterLinks } from './atoms'
import { StaticQuery, graphql } from 'gatsby'

const Container = Styled.div`
  position: relative;
  background-color: #E20031;
  font-family: Montserrat;
  font-size: .8rem;
  font-weight: 700;
  color: white;
  height: 15vw;
  width: 100vw;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulFooter {
          edges {
            node {
              footerSubscriptionTitle
              footerSubscriptionText
              footerLinks {
                content {
                  content {
                    data {
                      uri
                    }
                    content {
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <FooterSubscription
          title={data.allContentfulFooter.edges[0].node.footerSubscriptionTitle}
          text={data.allContentfulFooter.edges[0].node.footerSubscriptionText}
        />
        <FooterLinks
          linkData={data.allContentfulFooter.edges[0].node.footerLinks.content[0].content.map(
            c => c[1]
          )}
        />
      </Container>
    )}
  />
)

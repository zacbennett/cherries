import React from 'react'
import renderer from 'react-test-renderer'
import { graphql } from 'gatsby'

describe('ProductDescription', () =>
  it('renders correctly', async () => {
    const data = await graphql`
      {
        allContentfulProductPage(
          sort: { fields: [createdAt], order: DESC }
          limit: 4
        ) {
          edges {
            node {
              id
              createdAt
              title
              price
              images {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
    console.log(data)
    // expect(data).toMatchSnapshot()
  }))

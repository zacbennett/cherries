import React from 'react'
import renderer from 'react-test-renderer'
import { HomePageTryptych, PureHomePageTryptych } from '../HomePageTryptych'

describe('HomePageHero', () => {
  it('renders correctly', () => {
    const data = {
      contentfulHomePage: {
        tryptych: {
          content: [
            {
              nodeType: 'heading-4',
              data: {
                target: null,
              },
              content: [
                {
                  value: 'Jewelry, but make it fun.',
                },
              ],
            },
            {
              nodeType: 'embedded-asset-block',
              data: {
                target: {
                  fields: {
                    file: {
                      en_US: {
                        url:
                          '//images.ctfassets.net/4yejk6rho2rp/29LnpcJWdua0WY4Ugm4Igs/0c47d026abad1822dca7bc2a8fb870cf/sparkle-emoji.png',
                        fileName: 'sparkle-emoji.png',
                      },
                    },
                  },
                },
              },
              content: [],
            },
            {
              nodeType: 'paragraph',
              data: {
                target: null,
              },
              content: [
                {
                  value:
                    "We make cute, unique jewelry for every occasion—that good ish you can't get anywhere else.",
                },
              ],
            },
            {
              nodeType: 'embedded-asset-block',
              data: {
                target: {
                  fields: {
                    file: {
                      en_US: {
                        url:
                          '//images.ctfassets.net/4yejk6rho2rp/2LVH1dUby8UawuqSQGO0Yi/15aa6e94241b664921024c13add2907e/envelope-emoji.png',
                        fileName: 'envelope-emoji.png',
                      },
                    },
                  },
                },
              },
              content: [],
            },
            {
              nodeType: 'paragraph',
              data: {
                target: null,
              },
              content: [
                {
                  value:
                    'Subscribe to monthly deliveries to save that $$$ and keep your looks fresh.',
                },
              ],
            },
            {
              nodeType: 'embedded-asset-block',
              data: {
                target: {
                  fields: {
                    file: {
                      en_US: {
                        url:
                          '//images.ctfassets.net/4yejk6rho2rp/2Uv99J8a9iEeySUusc8UcW/2a4d76f25e3f9e02055406cacb344ca0/delivery-truck-emoji.png',
                        fileName: 'delivery-truck-emoji.png',
                      },
                    },
                  },
                },
              },
              content: [],
            },
            {
              nodeType: 'paragraph',
              data: {
                target: null,
              },
              content: [
                {
                  value:
                    'We offer free shipping to subscribers on all US orders, because we got your back girl.',
                },
              ],
            },
          ],
        },
      },
    }

    const tree = renderer.create(<PureHomePageTryptych data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

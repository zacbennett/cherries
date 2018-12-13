import React from 'react'
import renderer from 'react-test-renderer'
import { Footer, PureFooter } from '../Footer'

describe('Footer', () => {
  it('renders correctly', () => {
    
    const data = {
      allContentfulFooter: {
        edges: [
          {
            node: {
              footerSubscriptionTitle: 'Footer',
              footerSubscriptionText: 'Enter Footer text here, boiiiiii',
              footerLinks: {
                content: [
                  {
                    content: [
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                      {
                        data: {
                          uri: 'https://lipslut.com',
                        },
                        content: [
                          {
                            value: 'Refer a Friend',
                          },
                        ],
                      },
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                    ],
                  },
                  {
                    content: [
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                      {
                        data: {
                          uri: 'https://www.cherries.com/signin',
                        },
                        content: [
                          {
                            value: 'My Account',
                          },
                        ],
                      },
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                    ],
                  },
                  {
                    content: [
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                      {
                        data: {
                          uri: 'https://www.lipslut.com/contact-us/',
                        },
                        content: [
                          {
                            value: 'Careers',
                          },
                        ],
                      },
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                    ],
                  },
                  {
                    content: [
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                      {
                        data: {
                          uri: 'https://www.lipslut.com/faq/',
                        },
                        content: [
                          {
                            value: 'Help',
                          },
                        ],
                      },
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                    ],
                  },
                  {
                    content: [
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                      {
                        data: {
                          uri: 'https://www.lipslut.com/about-us/',
                        },
                        content: [
                          {
                            value: 'Our Story',
                          },
                        ],
                      },
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                    ],
                  },
                  {
                    content: [
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                      {
                        data: {
                          uri: 'https://www.instagram.com/hello.lipslut/',
                        },
                        content: [
                          {
                            value: 'Instagram',
                          },
                        ],
                      },
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                    ],
                  },
                  {
                    content: [
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                      {
                        data: {
                          uri: 'https://www.lipslut.com/terms-conditions/',
                        },
                        content: [
                          {
                            value: 'Terms of User',
                          },
                        ],
                      },
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                    ],
                  },
                  {
                    content: [
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                      {
                        data: {
                          uri: 'https://www.lipslut.com/privacy-policy/',
                        },
                        content: [
                          {
                            value: 'Privacy',
                          },
                        ],
                      },
                      {
                        data: {
                          uri: null,
                        },
                        content: null,
                      },
                    ],
                  },
                ],
              },
            },
          },
        ],
      },
    }
    const tree = renderer.create(<PureFooter data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

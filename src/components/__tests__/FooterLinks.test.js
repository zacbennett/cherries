import React from 'react'
import renderer from 'react-test-renderer'
import FooterLinks from '../atoms/FooterLinks'

describe('FooterLinks', () =>
  it('renders correctly', () => {
    const linkData = [
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
    ]

    const tree = renderer.create(<FooterLinks linkData={linkData} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

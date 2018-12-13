import React from 'react'
import renderer from 'react-test-renderer'
import { HomePageHero, PureHomePageHero } from '../HomePageHero'

describe('HomePageHero', () => {
  it('renders correctly', () => {
    const data = {
      contentfulHomePage: {
        contentfulData: {
          heroImage: {
            file: {
              url:
                '//images.ctfassets.net/4yejk6rho2rp/2Idi2Gr1KMYwYUQ8qWSqYq/b4406e872c773f97f8c0a188b7b608d9/homepage-hero-image.png',
            },
          },
          heroImageText: 'Fresh earrings, hand-picked by you',
        },
      },
    }
    const tree = renderer.create(<PureHomePageHero data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

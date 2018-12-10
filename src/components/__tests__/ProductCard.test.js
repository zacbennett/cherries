import React from 'react'
import renderer from 'react-test-renderer'
import ProductCard from '../atoms/ProductCard'

describe('ProductCard', () =>
  it('renders correctly', () => {
    const product = {
      title: 'Astronaut Baby',
      price: 22.99,
      images: [
        {
          file: {
            url:
              '//images.ctfassets.net/4yejk6rho2rp/60XuYBiY6IIes0aqyAOQIs/e177ec00483171ad7d8a71e6cf8f462f/fashion-woman-dangle-earrings-heartly-space-dream-tong-qu-the-earth-rocket-astronauts-blue-pendants-earrings.jpg_640x640.jpg',
          },
        },
      ],
    }
    const tree = renderer.create(<ProductCard product={product} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

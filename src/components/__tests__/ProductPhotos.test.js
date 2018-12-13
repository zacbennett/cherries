import React from 'react'
import renderer from 'react-test-renderer'
import ProductPhotos from '../molecules/ProductPhotos'

describe('ProductPhotos', () => {
  it('renders correctly', () => {
    const images = [
      {
        file: {
          url:
            '//images.ctfassets.net/4yejk6rho2rp/6pSrs6IctGUKiQamkkqEaQ/3f917708b9e0ccd1a33802c8e6be3ee6/Temperament-female-contracted-joker-metal-fashionable-abstract-gestures-heart-first-heart-students-joker-earrings-stud-earri.jpg',
        },
      },
      {
        file: {
          url:
            '//images.ctfassets.net/4yejk6rho2rp/3Ug6cvNybmquCqam8wKsWs/1563854d7d1673e0e943af7c3018d9d2/Temperament-female-contracted-joker-metal-fashionable-abstract-gestures-heart-first-heart-students-joker-earrings-stud-earri.jpg',
        },
      },
      {
        file: {
          url:
            '//images.ctfassets.net/4yejk6rho2rp/3r9KcbXdu0ssUaMGMqcqI0/7567b629b759930d54d2e714a995aa27/Temperament-female-contracted-joker-metal-fashionable-abstract-gestures-heart-first-heart-students-joker-earrings-stud-earri.jpg',
        },
      },
    ]
    const tree = renderer.create(<ProductPhotos images={images} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import ProductOrder from '../molecules/ProductOrder'

describe('ProductPhotos', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProductOrder />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

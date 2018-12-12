import React from 'react'
import renderer from 'react-test-renderer'
import ShoppingBagIcon from '../atoms/ShoppingBagIcon'

describe('ShoppingBagIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ShoppingBagIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

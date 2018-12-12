import React from 'react'
import renderer from 'react-test-renderer'
import QuantityAdjustButton from '../atoms/QuantityAdjustButton'

describe('QuantityAdjustButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<QuantityAdjustButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

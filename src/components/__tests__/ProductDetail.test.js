import React from 'react'
import renderer from 'react-test-renderer'
import ProductDetail from '../atoms/ProductDetail'

describe('ProductDetail', () =>
  it('renders correctly', () => {
    const details = [
      'Materials: something something something',

      'Closure: something else',

      'Allergy Information: something the most',
    ]
    const tree = renderer.create(<ProductDetail details={details} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

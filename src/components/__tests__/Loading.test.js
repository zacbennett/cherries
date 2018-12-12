import React from 'react'
import renderer from 'react-test-renderer'
import Loading from '../atoms/Loading'

describe('Loading', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Loading />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import SearchModal from '../molecules/SearchModal'

describe('SearchModal', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SearchModal />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

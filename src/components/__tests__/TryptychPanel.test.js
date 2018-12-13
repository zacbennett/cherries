import React from 'react'
import renderer from 'react-test-renderer'
import TryptychPanel from '../molecules/TryptychPanel'

describe('TryptychPanel', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TryptychPanel />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

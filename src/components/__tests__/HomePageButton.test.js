import React from 'react'
import renderer from 'react-test-renderer'
import HomePageButton from '../atoms/HomePageButton'

describe('HomePageButton', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<HomePageButton />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

import React from 'react'
import renderer from 'react-test-renderer'
import LoginGoogle from '../molecules/LoginGoogle'

describe('LoginGoogle', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<LoginGoogle />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

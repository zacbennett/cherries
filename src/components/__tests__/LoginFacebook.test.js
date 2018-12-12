import React from 'react'
import renderer from 'react-test-renderer'
import LoginFacebook from '../molecules/LoginFacebook'

describe('LoginFacebook', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<LoginFacebook />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

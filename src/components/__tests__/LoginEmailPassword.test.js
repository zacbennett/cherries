import React from 'react'
import renderer from 'react-test-renderer'
import LoginEmailPassword from '../molecules/LoginEmailPassword'

describe('LoginEmailPassword', () =>
  it('renders correctly', () => {
    // Does not test the UserContext!
    
    const tree = renderer.create(<LoginEmailPassword />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

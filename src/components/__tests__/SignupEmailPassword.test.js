import React from 'react'
import renderer from 'react-test-renderer'
import SignupEmailPassowrd from '../molecules/SignupEmailPassword'

describe('SignupEmailPasstowd', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SignupEmailPassowrd />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

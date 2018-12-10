import React from 'react'
import renderer from 'react-test-renderer'
import FooterSubscription from '../atoms/FooterSubscription'

describe('FooterSubscription', () =>
  it('renders correctly', () => {
    const text = 'Footer'
    const title = 'Enter Footer text here, boiiiiii'

    const tree = renderer
      .create(<FooterSubscription title={title} text={text} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))

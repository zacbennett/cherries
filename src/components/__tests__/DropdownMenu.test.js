import React from 'react'
import renderer from 'react-test-renderer'
import DropdownMenu from '../atoms/DropdownMenu'

describe('DropdownMenu', () =>
  it('renders correctly', () => {
    const icon =
      '//images.ctfassets.net/4yejk6rho2rp/6u7gsl9D3Oo46iYwW04y8c/66b1a6434576a65e23d5501ee03fb1a8/help-icon.png?w=800&q=50'

    const links = [
      {
        name: 'FAQ',
        route: 'faq',
      },
      {
        name: 'Help',
        route: 'faq',
      },
      {
        name: 'Returns',
        route: 'faq',
      },
      {
        name: 'team@lipslut.com',
        route: 'contact',
      },
    ]
    const tree = renderer
      .create(<DropdownMenu icon={icon} links={links} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))

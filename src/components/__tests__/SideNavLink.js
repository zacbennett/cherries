import React from 'react'
import renderer from 'react-test-renderer'
import SideNavLink from '../atoms/SideNavLink'

describe('SideNavLink', () => {
  it('renders correctly', () => {
    const dropDown = [
      {
        name: 'Basics',
        route: 'basics',
      },
      {
        name: 'Minimalist',
        route: 'minimalist',
      },
      {
        name: 'Girlboss',
        route: 'girlboss',
      },
      {
        name: 'Formal',
        route: 'formal',
      },
      {
        name: 'Boho',
        route: 'boho',
      },
      {
        name: 'Fun',
        route: 'fun',
      },
    ]
    const tree = renderer.create(<SideNavLink dropDown={dropDown} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

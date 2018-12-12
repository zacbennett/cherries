import React from 'react'
import renderer from 'react-test-renderer'
import SideNavDropdown from '../atoms/SideNavDropdown'

describe('Loading', () => {
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
    const tree = renderer
      .create(<SideNavDropdown dropDown={dropDown} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

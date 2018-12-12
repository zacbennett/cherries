import React from 'react'
import renderer from 'react-test-renderer'
import { SideNav, PureSideNav } from '../SideNav'
describe('SideNav', () => {
  it('renders correctly', () => {
    const data = {
      contentfulHomePage: {
        sideNavBar: {
          data: [
            {
              name: 'Vibes',
              displayed: 'either',
              route: null,
              dropDown: [
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
              ],
            },
            {
              name: 'Type',
              displayed: 'either',
              route: null,
              dropDown: [
                {
                  name: 'Stud',
                  route: 'stud',
                },
                {
                  name: 'Hoop',
                  route: 'hoop',
                },
                {
                  name: 'Drop',
                  route: 'drop',
                },
                {
                  name: 'Dangle',
                  route: 'dangle',
                },
                {
                  name: 'Huggy',
                  route: 'huggy',
                },
                {
                  name: 'Thread',
                  route: 'thread',
                },
              ],
            },
            {
              name: 'Finish',
              displayed: 'either',
              route: null,
              dropDown: [
                {
                  name: 'Resin',
                  route: 'resin',
                },
                {
                  name: 'Enamel',
                  route: 'enamel',
                },
                {
                  name: 'Gold',
                  route: 'gold',
                },
                {
                  name: 'Silver',
                  route: 'silver',
                },
              ],
            },
            {
              name: 'Shop All',
              displayed: 'either',
              route: 'catalog',
              dropDown: null,
            },
            {
              name: '-',
              displayed: 'either',
              route: null,
              dropDown: null,
            },
            {
              name: 'Subscribe',
              displayed: 'userNotSubscribed',
              route: 'subscribe',
              dropDown: null,
            },
            {
              name: 'About',
              displayed: 'either',
              route: 'about',
              dropDown: null,
            },
          ],
        },
      },
    }
    const tree = renderer.create(<PureSideNav data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

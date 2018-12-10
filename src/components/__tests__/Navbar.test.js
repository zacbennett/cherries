import React from 'react'
import renderer from 'react-test-renderer'
import { Navbar, PureNavbar } from '../Navbar'

describe('Navbar', () => {
  it('renders correctly', () => {
    const data = {
      contentfulHomePage: {
        navHelpIcon: {
          fluid: {
            src:
              '//images.ctfassets.net/4yejk6rho2rp/6u7gsl9D3Oo46iYwW04y8c/66b1a6434576a65e23d5501ee03fb1a8/help-icon.png?w=800&q=50',
          },
        },
        navUserIcon: {
          fluid: {
            src:
              '//images.ctfassets.net/4yejk6rho2rp/8WGaI6nf8suy8YUQYsois/17e7023c4ad873b82a22bf6704de790e/user-icon.png?w=800&q=50',
          },
        },
        navCartIcon: {
          fluid: {
            src:
              '//images.ctfassets.net/4yejk6rho2rp/6NiPYpu9FYKqs4CW6QAKCi/cd5b1b98fe86f6fe2f264acbdf39dbdb/shopping-bag-icon.png?w=800&q=50',
          },
        },
        navSearchIcon: {
          fluid: {
            src:
              '//images.ctfassets.net/4yejk6rho2rp/1Kjc0inKTe0AEomGUy2iu/bc85cf1f149b25cb2513069c4a64846d/magnifying-glass__2_.png?w=800&q=50',
          },
        },
        navCherriesIcon: {
          fluid: {
            src:
              '//images.ctfassets.net/4yejk6rho2rp/vXHBTTvYRwKKsukOMKEQi/b1c8e9091314f28f5b66f0770f1da457/cherries-logo.png?w=800&q=50',
          },
        },
        bannerPromoText:
          'This is the body text of a banner announcement. Could be about prods etc etc etc.',
        bannerPromoTitle: 'Announcements! ',
        userLinks: {
          data: [
            {
              dropdownLinks: [
                {
                  name: 'Sign Up',
                  route: 'signup',
                },
                {
                  name: 'Log In',
                  route: 'login',
                },
              ],
            },
            {
              dropdownLinks: [
                {
                  name: 'Account',
                  route: 'account',
                },
                {
                  name: 'Log Out',
                  route: '',
                },
              ],
            },
          ],
        },
        helpLinks: {
          data: [
            {
              dropdownLinks: [
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
              ],
            },
          ],
        },
      },
    }
    const tree = renderer.create(<PureNavbar data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

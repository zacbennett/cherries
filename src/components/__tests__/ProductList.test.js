import React from 'react'
import renderer from 'react-test-renderer'
import ProductList from '../molecules/ProductList'

describe('ProductList', () => {
  it('renders correctly', () => {
    const products = [
      {
        node: {
          title: 'Astronaut Baby',
          price: 22.99,
          sku: '24',
          productCopy: {
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    value: 'Hi',
                    nodeType: 'text',
                  },
                ],
              },
            ],
          },
          details: {
            content: [
              {
                content: [
                  {
                    value: 'Materials: something something something',
                  },
                ],
              },
              {
                content: [
                  {
                    value: 'Closure: something else',
                  },
                ],
              },
              {
                content: [
                  {
                    value: 'Allergy Information: something the most',
                  },
                ],
              },
            ],
          },
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/60XuYBiY6IIes0aqyAOQIs/e177ec00483171ad7d8a71e6cf8f462f/fashion-woman-dangle-earrings-heartly-space-dream-tong-qu-the-earth-rocket-astronauts-blue-pendants-earrings.jpg_640x640.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/7hDZI4CKeQa4wAamoU0sCI/111d798be6ef67e2e5a827d00a3a832d/fashion-woman-dangle-earrings-heartly-space-dream-tong-qu-the-earth-rocket-astronauts-blue-pendants-earrings.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3ok4nPAB3iosEWIsSQAeUA/a110bde70a54bf93a5aede31bed4b651/fashion-woman-dangle-earrings-heartly-space-dream-tong-qu-the-earth-rocket-astronauts-blue-pendants-earrings.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          title: 'Geometric Oval Drop',
          price: 18.99,
          sku: '18',
          productCopy: {
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    value:
                      'Bro ipsum dolor sit amet pow Ski reverse camber, caballerial rail bail skinny endo travel betty ski bum. Schwag dope north shore ride around over the bars. Table top huck crank, caballerial japan air rigid misty chain ring roadie wheels drop huck. Travel switch huckfest ACL wheelie misty derailleur daffy Whistler rig.',
                    nodeType: 'text',
                  },
                ],
              },
            ],
          },
          details: null,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/7slN8SXJ0QiKkcYCyGkSyO/9b62e2aefc280bbc818a5f7dbab3a515/Fashion-color-metal-geometry-stud-earrings-female-popular-Classic-Golden-women-stud-earrings-red-rectangle-earrings.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/5taayuJdde2MYkCyw6I64k/2894909da007fb66428e6db98485c04b/Fashion-color-metal-geometry-stud-earrings-female-popular-Classic-Golden-women-stud-earrings-red-rectangle-earrings.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/6HdQmSobdeWEKQia88KmOg/4f19626bcd98a0d64a1d6e0a4eadd439/Fashion-color-metal-geometry-stud-earrings-female-popular-Classic-Golden-women-stud-earrings-red-rectangle-earrings.jpg',
              },
            },
          ],
        },
      },
    ]
    const tree = renderer.create(<ProductList products={products} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

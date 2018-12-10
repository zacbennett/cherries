import React from 'react'
import renderer from 'react-test-renderer'
import ProductDescription from '../molecules/ProductDescription'

describe('ProductDescription', () =>
  it('renders correctly', () => {
    const price = '9.99'
    const title = 'Test Product'
    const images = [
      {
        file: {
          url:
            '//images.ctfassets.net/4yejk6rho2rp/1seQeOcUKEqkqG8iMeyQkO/f314700fc9f0e8d57715c30853a7859c/Retro-cylindrical-geometry-wood-earrings-jewelry-exaggerated-Christmas-red-green-colours-wood-pendant-earrings-for-women.jpg',
        },
      },
      {
        file: {
          url:
            '//images.ctfassets.net/4yejk6rho2rp/7cx6GGghKo6ukOwq0ceoqi/150babae3d22e18cdb3fc87ec45564ac/Retro-cylindrical-geometry-wood-earrings-jewelry-exaggerated-Christmas-red-green-colours-wood-pendant-earrings-for-women.jpg',
        },
      },
      {
        file: {
          url:
            '//images.ctfassets.net/4yejk6rho2rp/4rSP9SxdLqaEaUI62GMsek/70ceaedde47a68c6152481aa12f91327/Retro-cylindrical-geometry-wood-earrings-jewelry-exaggerated-Christmas-red-green-colours-wood-pendant-earrings-for-women.jpg',
        },
      },
    ]
    const sku = '81'
    const productCopy = [
      {
        nodeType: 'paragraph',
        content: [
          {
            value: 'Hi',
            nodeType: 'text',
          },
        ],
      },
    ]

    const details = [
              'Enamel pin semiotics mixtape art party, selvage farm-to-table shabby chic vape 3 wolf moon sriracha glossier disrupt cronut celiac. Whatever vegan hexagon occupy celiac poutine enamel pin fanny pack tattooed master cleanse squid salvia. Celiac flexitarian biodiesel, coloring book raclette glossier migas. Fanny pack af tousled master cleanse woke. Jianbing whatever echo park, salvia raclette dreamcatcher narwhal letterpress pour-over.',
    ]

    const tree = renderer
      .create(
        <ProductDescription
          price={price}
          title={title}
          images={images}
          sku={sku}
          productCopy={productCopy}
          details={details}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))

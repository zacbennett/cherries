import React from 'react'
import SearchModal from '../molecules/SearchModal'
let Fuse = require('fuse.js')

describe('SearchModal', () => {
  it('renders search results correctly given search term', () => {
    const options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['node.title'],
    }

    const contentfulProductData = [
      {
        node: {
          id: 'c0ca8cfd-a3b3-5c3a-9d99-920af1fc8fb6',
          createdAt: '2018-11-27T00:53:35.609Z',
          title: 'Peach Heart Drop',
          price: 15.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/2R0vaW0UGAAOu0IEM6c6SW/efe765b7e6cea62159cc7c92dfa2256c/stud-earrings-for-women-Drip-heart-shaped-earrings-Peach-heart-earrings-Heart-shaped-pendant-fine-jewelry.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/2pULVjlnviMoM0qigwq4SU/ebf5622b4634ae1af0f49a2f97d454eb/stud-earrings-for-women-Drip-heart-shaped-earrings-Peach-heart-earrings-Heart-shaped-pendant-fine-jewelry.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/4U0aNjx036kswagm2m6q0a/0c187b9b90b1109e42de467d74dbec34/stud-earrings-for-women-Drip-heart-shaped-earrings-Peach-heart-earrings-Heart-shaped-pendant-fine-jewelry.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: 'e3492aeb-61b3-53e2-aff4-f184c866ea5e',
          createdAt: '2018-11-27T01:03:57.001Z',
          title: 'Long Hollow Heart Drop',
          price: 12.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/4kRHgTKPhuko88uwUmSoE4/250d966c2fa9efb4429d76fa88d16559/Golden-hollow-out-heart-hearts-long-stud-earrings-restoring-ancient-ways-women-beautiful-earrings.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/1auVe9O9p2Cmk0w6aOAKws/caaff3b0e70238d6abdd812442c7278b/Golden-hollow-out-heart-hearts-long-stud-earrings-restoring-ancient-ways-women-beautiful-earrings.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '431ea542-8f9c-5a32-9b8b-49a3703af80b',
          createdAt: '2018-11-27T19:01:46.778Z',
          title: 'Short Hollow Heart Drop',
          price: 12.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/4nAE88P4oEuY24mKGWwgMG/62ca53af215ce315ca12c51680735105/Golden-hollow-out-heart-hearts-long-stud-earrings-restoring-ancient-ways-women-beautiful-earrings.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '8f6748e7-f48a-51a3-8be9-6e379438d7d5',
          createdAt: '2018-11-27T19:06:15.722Z',
          title: 'Marble Circle Drop',
          price: 16.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/28sOpNplJmK0aUC6c8ou6u/bb9347df867b9c72e23395c0eb692b3c/Hot-Women-earrings-stone-Vintage-Natural-marble-joker-stud-earring-Classic-geometric-circular-fashion-popular-earrings.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/CxLHXR4SGGgEM6acskYiQ/e3dba74f9ac3324c23233d09ea559ccf/Hot-Women-earrings-stone-Vintage-Natural-marble-joker-stud-earring-Classic-geometric-circular-fashion-popular-earrings.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '251628e0-fb57-501f-b0f7-2d10faea9235',
          createdAt: '2018-11-27T19:10:39.329Z',
          title: 'Star Chain Drop',
          price: 13.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3FFGuCf7q8ECCkUwQgEo8i/8591d6f4d772b2bb36677989e97e3edd/Fine-jewelry-woman-stud-earring-lovely-fashion-stars-long-earrings-Young-girl-stud-earrings-Simple-metal.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/5fosmt0Ug0sYQYwiwuoKcO/92f9b46f60dc12d740114d6a401916f2/Fine-jewelry-woman-stud-earring-lovely-fashion-stars-long-earrings-Young-girl-stud-earrings-Simple-metal.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3TTDrcA4pWIkmOUsg0CGY0/1ed4e0557f95d59b6caedc15afca6381/Fine-jewelry-woman-stud-earring-lovely-fashion-stars-long-earrings-Young-girl-stud-earrings-Simple-metal.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '46a6a9a1-050d-541f-a158-8022feaecfdf',
          createdAt: '2018-11-27T19:30:00.886Z',
          title: 'Contrast Color Circle Studs',
          price: 18.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/1CWf9eZnXOui4UEaSicWUC/8ab41f1810a2d1e0b812156ba9df9a00/Contrast-color-geometrical-stud-earrings-irregular-fashionable-joker-round-stud-earrings-fashion-woman-earrings-fine-jewelry.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/9rQc146urKMwyMgYQKOIu/fec6de657dad83329479cc901e4e40c2/Contrast-color-geometrical-stud-earrings-irregular-fashionable-joker-round-stud-earrings-fashion-woman-earrings-fine-jewelry.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '19c68352-3ccd-5284-9c73-90f268f14024',
          createdAt: '2018-11-27T19:50:05.868Z',
          title: 'Charm Drop',
          price: 9.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/2bxiWYstu8YeeWwmYOwEAi/4bdcf216e3a2511fcd55986b71d15995/fashion-woman-earrings-Sprout-sister-starlight-peach-heart-words-ears-line-fine-girls-sweet-earrings-accessories.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/2Y6YHuDBReWumw8W0Y6G0m/a943891e7e9ef2a040afd4f2485f725c/fashion-woman-earrings-Sprout-sister-starlight-peach-heart-words-ears-line-fine-girls-sweet-earrings-accessories.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3i7nzbVRccoqmGQ2COgoGO/338e1bc00cc96fcb04d1bfdf25d49ef4/fashion-woman-earrings-Sprout-sister-starlight-peach-heart-words-ears-line-fine-girls-sweet-earrings-accessories.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '9f1dabd3-7fc9-5417-a5a8-286f18d33876',
          createdAt: '2018-11-27T19:56:21.912Z',
          title: 'Hoop with Dangle',
          price: 13.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/11mB2WGuBIi4OKG4GqO4MU/8102c809a3458fbf0430321f44c1df6d/kshmir-Circle-earrings-female-temperament-of-American-long-tassel-earrings-earrings-tide.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/26hkMwxECYgisimiyUeQ8i/d14d438cd8e460ac756f0e43f65a1a81/kshmir-Circle-earrings-female-temperament-of-American-long-tassel-earrings-earrings-tide.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '4d4cf16f-adf4-58ae-a4d2-a695aa35fea7',
          createdAt: '2018-11-27T20:05:15.268Z',
          title: 'Flat Hoops',
          price: 22.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/4I2ShpfQ8E6k4qqSSskOs8/c93ff7947cc1647e924819eaa2c4a833/2018-new-earrings-stud-earrings-trend-character-texture-big-ear-ring-earrings-stud-earrings-gift.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/nwJp190rniks2AuaGwo4a/96601d7f3ccb008a2571c5fd86c045c7/2018-new-earrings-stud-earrings-trend-character-texture-big-ear-ring-earrings-stud-earrings-gift.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/5R5z063nIQcEoesOWygIiC/dad96ffc619d9ae94ad8cc03164b6dc9/2018-new-earrings-stud-earrings-trend-character-texture-big-ear-ring-earrings-stud-earrings-gift.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '673bdb31-1dcd-5f4b-bd2e-28305abea192',
          createdAt: '2018-11-27T21:25:39.068Z',
          title: 'Glass Bead Drop',
          price: 13.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/bArYQMhJU4W8mm6SgIQ2A/2dee6abaeebdda56126493bf11d81e5e/fashion-woman-earrings-fine-jewelry-accessories-The-new-eardrop-of-glass-ball-Grind-arenaceous-transparent-glass.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3Z2ToIC6MEyWeiiIamMGIM/93519a5b1167a65459b156da77ce0329/fashion-woman-earrings-fine-jewelry-accessories-The-new-eardrop-of-glass-ball-Grind-arenaceous-transparent-glass.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/7K5uVoHAOIYg2Aos6W84Ei/3eae6278987a1f42cef3ac70f54dd123/fashion-woman-earrings-fine-jewelry-accessories-The-new-eardrop-of-glass-ball-Grind-arenaceous-transparent-glass.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '9aa846c5-584c-5985-bb87-f2a815678055',
          createdAt: '2018-11-27T21:35:32.281Z',
          title: 'Star Charm Hoop',
          price: 2.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3tkAVHuUmcYCiwgwOCGK2/3161a5f31ac9029348fc033802868d20/Girls-fashion-earrings-The-popular-fashion-simple-pentagram-female-stud-earrings-personality-fine-jewelry-accessories-earrin.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/23jjJ4qbzK68QkaoUsI682/7cef48021280ef8a85d70eb240bfebac/Girls-fashion-earrings-The-popular-fashion-simple-pentagram-female-stud-earrings-personality-fine-jewelry-accessories-earrin.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/Q1eFWI7Wq2oouiUYSwS6s/28e2c6d227b7407f52a1f154f436dcc6/Girls-fashion-earrings-The-popular-fashion-simple-pentagram-female-stud-earrings-personality-fine-jewelry-accessories-earrin.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '4758c62a-c849-52b5-9b78-5cd5493a0c7d',
          createdAt: '2018-11-27T21:40:31.601Z',
          title: 'Wood Bead Drop',
          price: 21.99,
          images: [
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
          ],
        },
      },
      {
        node: {
          id: '50276dd4-6cce-5670-a25d-a5407b25c1d1',
          createdAt: '2018-11-27T21:52:07.164Z',
          title: 'Pearl Drop',
          price: 16.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3Rx2NFr8kwqgMCweMAqamO/6e1a0ba748b6822f718882f304880b70/kshmir-Acme-contracted-Pearl-earrings-Long-meteor-earrings-Irregular-earrings-The-girl-accessories.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3dKFqmC1Pqa8OaM6GAK2u6/1995f74443bd153e545acc34945c9ee3/kshmir-Acme-contracted-Pearl-earrings-Long-meteor-earrings-Irregular-earrings-The-girl-accessories.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/acXFk6CzNmKMcCYsssEeW/c4e6fdfef561ec892c8932ab71b9d4e6/kshmir-Acme-contracted-Pearl-earrings-Long-meteor-earrings-Irregular-earrings-The-girl-accessories.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: 'b887df5d-25a3-5caa-89a5-5c972c0e2b01',
          createdAt: '2018-11-27T21:57:36.592Z',
          title: 'Heart Hand Studs',
          price: 12.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/6pSrs6IctGUKiQamkkqEaQ/3f917708b9e0ccd1a33802c8e6be3ee6/Temperament-female-contracted-joker-metal-fashionable-abstract-gestures-heart-first-heart-students-joker-earrings-stud-earri.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3Ug6cvNybmquCqam8wKsWs/1563854d7d1673e0e943af7c3018d9d2/Temperament-female-contracted-joker-metal-fashionable-abstract-gestures-heart-first-heart-students-joker-earrings-stud-earri.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3r9KcbXdu0ssUaMGMqcqI0/7567b629b759930d54d2e714a995aa27/Temperament-female-contracted-joker-metal-fashionable-abstract-gestures-heart-first-heart-students-joker-earrings-stud-earri.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: 'e2f4fc1c-abf7-5f0f-bcab-4fd81b3ac3bf',
          createdAt: '2018-11-27T22:05:02.413Z',
          title: 'Circle Drop',
          price: 28.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/7atGeBof1SSeqe2I6y4Aas/5c6691aae0958fc2883568e0c34c292d/Temperament-creative-design-bump-color-color-matching-circular-earrings-exaggerated-atmospheric-net-red-female-fashion-earri.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/2tHjZbg03aEAI8Qmu4om2M/248a3298067c5242a843312eb21d1a79/Temperament-creative-design-bump-color-color-matching-circular-earrings-exaggerated-atmospheric-net-red-female-fashion-earri.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/4lIcJ6ylfiGaeWyWMS2UII/50d4260789603b6f9f93ab2c7bcf859f/Temperament-creative-design-bump-color-color-matching-circular-earrings-exaggerated-atmospheric-net-red-female-fashion-earri.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '88975bd2-cb99-585a-81ca-c7e84d1ff770',
          createdAt: '2018-11-27T22:09:49.065Z',
          title: 'Evil Eye Drop',
          price: 19.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/7nnCfLmk5aK4koqMamesgI/2ca65771930c361694304619de6e83b0/Eye-of-the-demon-stud-earrings-Deserve-to-act-the-restoring-ancient-ways-Ms-eye-pendant.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/4LEHP4QrXqsSecOoWYSKUq/a7b5d68273ae5267cdc8278ac06118fa/Eye-of-the-demon-stud-earrings-Deserve-to-act-the-restoring-ancient-ways-Ms-eye-pendant.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/5sW4gcwLYs20mWwKWC0aaU/8d06ec4e0750e48b91db1cc89a38a8a0/Eye-of-the-demon-stud-earrings-Deserve-to-act-the-restoring-ancient-ways-Ms-eye-pendant.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: 'dba5915b-a95f-5d57-b250-9a03ca9caa1c',
          createdAt: '2018-11-27T22:19:06.717Z',
          title: 'Cherry Drops',
          price: 18.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/4RjMX3K7JmK6e8gocKyWKU/305565d3173fd16bc955aec2149106d8/hot-red-Cherry-earrings-eardrop-Sweet-fruit-fresh-cherry-eardrop-female-fashion-youth-beautiful-girl-students.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/59JqWQeDUQuUYa2SEuG2gi/a16f109c3451f33bdbbbf5af02c390c7/hot-red-Cherry-earrings-eardrop-Sweet-fruit-fresh-cherry-eardrop-female-fashion-youth-beautiful-girl-students.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/5CopPVi9lmiGMCiKOMI66A/9a12181cc9dd36dc9150ee673008d087/hot-red-Cherry-earrings-eardrop-Sweet-fruit-fresh-cherry-eardrop-female-fashion-youth-beautiful-girl-students.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: 'b37b42a0-83b4-5acb-a22f-972b5ddaba24',
          createdAt: '2018-11-27T22:31:47.313Z',
          title: 'Geometric Oval Drop',
          price: 18.99,
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
      {
        node: {
          id: 'e5b80c8a-37bc-5b87-9661-ea3dbd9e2ae3',
          createdAt: '2018-11-27T22:41:51.867Z',
          title: 'Strawberry Drops',
          price: 18.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/7joML1ZkiWKQgei4IiKOMq/aae3e7947f5aa58311b9e7d723c3ba70/New-Fruit-strawberry-earring-female-lovely-girl-simulation-red-strawberry-dangle-earring-for-women-fine-jewelry.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/5GQdUux4xU2UOeY4UWqyiK/002f6dd3478615df84722ead43aa29f0/New-Fruit-strawberry-earring-female-lovely-girl-simulation-red-strawberry-dangle-earring-for-women-fine-jewelry.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/2HUfByKgzCykGKeOCeUsuI/62b664e0be7ecfb206bde23c356558ac/New-Fruit-strawberry-earring-female-lovely-girl-simulation-red-strawberry-dangle-earring-for-women-fine-jewelry.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: 'c35e8f3d-a4cb-5521-8e56-b3f1974eb0e6',
          createdAt: '2018-11-27T22:46:06.673Z',
          title: 'Heart Hoops',
          price: 12.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/q1i9yNzBC0sAOWC800QiM/566f787c1936ab779607406ff08740e7/woman-fashion-stud-earrings-Heart-shaped-earrings-Young-girl-heart-soft-sister-heartly-earrings-women-Stud.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/2v2jz7HTMswYIQuEussoGi/2de7f8e8b8700b9f000e924b7bf6cc6c/woman-fashion-stud-earrings-Heart-shaped-earrings-Young-girl-heart-soft-sister-heartly-earrings-women-Stud.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/508N6T4jMsIkmuss2g8iYo/37e2ee87566d290203eec5d89dc0e2ff/woman-fashion-stud-earrings-Heart-shaped-earrings-Young-girl-heart-soft-sister-heartly-earrings-women-Stud.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: 'fa09db22-e8fd-56cf-ae65-18aecdd1f873',
          createdAt: '2018-11-27T22:53:11.663Z',
          title: 'Peach Drops',
          price: 19.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/tmxxea74FqmmYea6Ce4Y0/58af9d008eacdb361637b13dbc751941/Earrings-for-women-Fashion-new-peach-stud-earrings-contracted-joker-cute-girl-peach-female-stud-earrings.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/VIxacJAXWm2kmkEOamuWY/e27bd3869de9abf41615e125fae85287/Earrings-for-women-Fashion-new-peach-stud-earrings-contracted-joker-cute-girl-peach-female-stud-earrings.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/9tkcv9h2w0K2gmqGMoOqE/36da931c390d816ca13b93e8126b7d4c/Earrings-for-women-Fashion-new-peach-stud-earrings-contracted-joker-cute-girl-peach-female-stud-earrings.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: 'e0cbe6f7-1a75-5950-8a5c-cb16f100e7de',
          createdAt: '2018-11-27T23:28:57.372Z',
          title: 'Heart Pearl Drop',
          price: 15.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/4NlD3J04v6kCkOG0cUecsU/99c05b65e6b2e79088f4d7ddeba4a67e/Classic-fashion-girls-heart-elegant-pearl-fashion-long-heart-shaped-earrings-earrings.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/3dWZaC02mcciKQA20KwOqY/43d8535930bfa07d75b8acf064fa233b/Classic-fashion-girls-heart-elegant-pearl-fashion-long-heart-shaped-earrings-earrings.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/Wqortb268UYu2CowOkYe2/48abc01fbd34c6fadef2126355e3151f/Classic-fashion-girls-heart-elegant-pearl-fashion-long-heart-shaped-earrings-earrings.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '3ddf2622-f107-56cb-8996-ec730aa56efd',
          createdAt: '2018-11-27T22:57:33.803Z',
          title: 'Asymmetric Heart Drops',
          price: 16.99,
          images: [
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/5Eg8ulyqf6EYAWOIOkak4Y/6bb0e702b1a760a53fdf07bca4e1080a/Fashion-heart-shaped-women-jewelry-stud-earrings-red-heart-asymmetric-earrings-for-women-fashion-fine-jewelry.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/5Anpc2Zcruk68EYgm4oWoc/f186d9c25e9e3582ee31e36329498170/Fashion-heart-shaped-women-jewelry-stud-earrings-red-heart-asymmetric-earrings-for-women-fashion-fine-jewelry.jpg',
              },
            },
            {
              file: {
                url:
                  '//images.ctfassets.net/4yejk6rho2rp/2f33BSzrgAIcMieuG4o6eS/b9aef2977c2e4948986d15ad04f7bf8a/Fashion-heart-shaped-women-jewelry-stud-earrings-red-heart-asymmetric-earrings-for-women-fashion-fine-jewelry.jpg',
              },
            },
          ],
        },
      },
      {
        node: {
          id: '12b55252-b415-5723-bd1b-0b7787da3417',
          createdAt: '2018-11-27T23:33:09.954Z',
          title: 'Astronaut Baby',
          price: 22.99,
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
    ]

    let fuse = new Fuse(contentfulProductData, options)

    let searchTerm = 'heart'
    let results = fuse.search(searchTerm)
    expect(results.length).toBe(7)

    let secondSearchTerm = 'h'
    let secondResults = fuse.search(secondSearchTerm)
    expect(secondResults.length).toBe(14)
  })
})

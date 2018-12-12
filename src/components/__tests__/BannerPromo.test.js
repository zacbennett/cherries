import React from 'react'
import renderer from 'react-test-renderer'
import BannerPromo from '../molecules/BannerPromo'

describe('BannerPromo', () =>
  it('renders correctly', () => {
    const bannerTitle = 'Announcements!'
    const bannerText = 'NEW SALE!!'
    const tree = renderer
      .create(<BannerPromo bannerText={bannerText} bannerTitle={bannerTitle} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))

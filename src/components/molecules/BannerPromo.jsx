import React, { Component } from 'react'
import styled from 'styled-components'
// import { IoIosClose } from 'react-icons/io'
// import { Link } from 'gatsby'
import './BannerPromo.css'

/** Overview of BannerPromo component:
 *  - Created three styled div containers
 *    - One wraps the whole BannerPromo
 *    - The other two wrap the text inside the BannerPromo
 *  - BannerPromo renders Announcement and PromoText
 *  - TODO: Add functionality to close the announcement and X icon
 *
 */

const Container = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: left;
  background-color: #e20031;
  padding: 0.5rem;
  height: 2.5rem;
  text-align: left;
  p {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`
const Announcement = styled.div`
  color: white;
  font-size: 20px
  margin: 0px 15px 10px 20px;
`
const PromoText = styled.div`
  color: white;
  font-size: 12px;
`
class BannerPromo extends Component {
  render() {
    return (
      <Container>
        <Announcement className="banner-text">Announcements!</Announcement>
        <PromoText className="banner-text">
          Monster rat is attacking pizza rat
        </PromoText>

        {/* <IoIosClose /> */}
      </Container>
    )
  }
}

export default BannerPromo

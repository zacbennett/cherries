import React, { Component } from 'react'
import styled from 'styled-components'
import { IoIosClose } from 'react-icons/io'

/** Overview of BannerPromo component:
 *  - Created three styled div containers
 *    - One wraps the whole BannerPromo
 *    - The other two wrap the text inside the BannerPromo
 *  - BannerPromo renders Announcement and PromoText - these are queried dynamically from contentful and passed down as props from NavBar component
 */

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: left;
  background-color: #e20031;
  height: 2.5rem;
  text-align: left;
  padding: 0.5rem 1rem;
  p {
    margin: 0;
    margin-right: 1rem;
  }
  .banner-title {
    color: white;
    font-size: 1rem;
    font-style: italic;
    font-weight: bold;
  }

  .banner-text {
    color: white;
    font-size: 0.8rem;
    font-style: italic;
    margin: 0rem 1rem;
  }

  .icon {
    color: black;
    margin-left: auto;
    :hover {
      cursor: pointer;
    }
  }
  @media (max-width: 420px) {
    height: auto;
  }
`

class BannerPromo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: true,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ display: false })
  }

  render() {
    const banner = this.state.display ? (
      <Container>
        <div className="banner-title">{this.props.bannerTitle}</div>
        <p className="banner-text">{this.props.bannerText}</p>
        <div className="icon">
          <IoIosClose size={30} onClick={this.handleClick} />
        </div>
      </Container>
    ) : (
      ''
    )
    return <React.Fragment>{banner}</React.Fragment>
  }
}

export default BannerPromo

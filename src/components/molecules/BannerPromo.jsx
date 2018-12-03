import React, { Component } from 'react'
import styled from 'styled-components'
import { IoIosClose } from 'react-icons/io'

const Container = styled.div`
  position: relative;
  top: -8px;
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
  .banner-text {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: bold;
  }
`
const Announcement = styled.div`
  color: white;
  font-size: 20px;
  margin: 0px 15px 10px 20px;
  font-style: italic;
  font-weight: bold;
`
const PromoText = styled.div`
  color: white;
  font-size: 12px;
  margin-top: 2px;
  font-weight: 400;
  font-style: italic;
  font-weight: bold;
`
const Icon = styled.div`
  color: black;
  margin-left: auto;
  :hover {
    cursor: pointer;
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
        <Announcement className="banner-text">
          {this.props.bannerTitle}
        </Announcement>
        <PromoText className="banner-text">{this.props.bannerText}</PromoText>
        <Icon>
          <IoIosClose
            // style={{ color: 'black' }}
            size={30}
            onClick={this.handleClick}
          />
        </Icon>{' '}
      </Container>
    ) : (
      ''
    )
    return <React.Fragment>{banner}</React.Fragment>
  }
}

export default BannerPromo

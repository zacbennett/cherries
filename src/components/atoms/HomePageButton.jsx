import React, { Component } from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

const Container = Styled.div`
#hero-image-button{
background-color: #e20031;
color: white;
text-transform: uppercase;
padding: 10px 30px 
font-size: 23px;
border: none;
width: 100%;
cursor: pointer;
}
`

class HomePageButton extends Component {
  render() {
    return (
      <Container>
        <Link to="/">
          <button id="hero-image-button">{this.props.buttonText}</button>
        </Link>
      </Container>
    )
  }
}

export default HomePageButton

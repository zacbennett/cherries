import React, { Component } from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

const Container = Styled.div`
background-color: #e20031;
color: white;
text-transform: uppercase;
text-align: center;
padding: 10px 30px 
font-size: 23px;
font-weight: 700;
width: 16rem;
cursor: pointer;
a{
  color: white;
  text-decoration: none;
}
`

class HomePageButton extends Component {
  render() {
    return (
      <Container>
        <Link to="/">GET STARTED</Link>
      </Container>
    )
  }
}

export default HomePageButton

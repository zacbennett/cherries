import React, { Component } from 'react'
import Styled from 'styled-components'

/** Overview of index.js component:
 *  - Created a styled div container which will wrap our NavBar component and, later on, our app.
 *
 */

const Container = Styled.div`
background-color: #e20031;
color: white;
text-transform: uppercase;
padding: 10px 30px 
font-size: 23px;
border: none;
width: 100%;
cursor: pointer;
`

const HomePageButton = ({ data }) => {
  return (
    <Container>
      <Link to="/">
        <button id="hero-image-button">{this.props.buttonText}</button>
      </Link>
    </Container>
  )
}

export default HomePageButton

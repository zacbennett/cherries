import React, { Component } from 'react'
// import { Link } from 'gatsby'
import Styled from 'styled-components'
// import { Layout } from '../components/layout'
// import { Image } from '../components/image'
import NavBar from '../components/NavBar'
// import '../index.css'

/** Overview of index.js component:
 *  - Created a styled div container which will wrap our NavBar component and, later on, our app.
 *
 */

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadein 1s; 
  @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`

class IndexPage extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <h1>Churritos</h1>
        <p>Welcome to Cherries.</p>
      </Container>
    )
  }
}

export default IndexPage

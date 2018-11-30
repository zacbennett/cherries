import React, { Component } from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'
/** Overview of index.js component:
 *  - Created a styled div container which will wrap our NavBar component and, later on, our app.
 *
 */

const Container = Styled.div`
background-color: #e20031;
color: white;
text-transform: uppercase;
text-align: center;
padding: 10px 30px 
font-size: 23px;
font-weight: 700;
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
        <Link to="/">
          {/* <button className="get-started-button"> */}
          {this.props.buttonText}
          {/* </button> */}
        </Link>
      </Container>
    )
  }
}

export default HomePageButton

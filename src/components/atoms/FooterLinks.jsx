import React, { Component } from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

const Container = Styled.div`
display: flex;
flex-basis: 50%;
flex-direction: row;
align-items: center;
justify-content: center;
font-weight: 700;
.list-items {
  text-decoration: none;
  color: white;
}
.list {
  list-style-type: none;
  padding-right: 1rem;
}
`
class FooterLinks extends Component {
  render() {
    return (
      <Container>
        <div>
          <ul className="list">
            <li className="footer-link">
              <Link to="/" className="list-items">
                Refer a Friend
              </Link>
            </li>
            <li>
              <Link to="/" className="list-items">
                My Account
              </Link>
            </li>
            <li>
              <Link to="/" className="list-items">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/" className="list-items">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list">
            <li>
              <Link to="/" className="list-items">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/" className="list-items">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="/" className="list-items">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/" className="list-items">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    )
  }
}

export default FooterLinks

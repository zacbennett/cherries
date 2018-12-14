import React, { Component } from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

const Container = Styled.div`
display: flex;
flex-basis: 50%;
align-items: center;
justify-content: center;
width: 100%;
.list-items {
  text-decoration: none;
  color: white;
}
li {
  padding-right: 3.6rem;
}
.list {
  width: 90%;
  height: 10rem;
  list-style-type: none;
  padding-top: 1rem;
  padding-right: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  flex-basis: 50%;
}
@media (max-width: 420px) {
  flex-direction: column;
}
`
class FooterLinks extends Component {
  render() {
    const links = this.props.linkData.map((d, index) => (
      <li key={index}>
        <Link className="list-items" to={d.content[1].data.uri}>
          {d.content[1].content[0].value}
        </Link>
      </li>
    ))
    return (
      <Container>
        <ul className="list">{links}</ul>
      </Container>
    )
  }
}

export default FooterLinks

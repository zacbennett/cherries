import React, { Component } from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

const Container = Styled.div`
display: flex;
flex-basis: 50%;
align-items: center;
justify-content: center;
.list-items {
  text-decoration: none;
  color: white;
}
li {
  padding-right: 3.6rem;
}
.list {
  height: 10rem;
  list-style-type: none;
  padding-top: 1rem;
  padding-right: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  flex-basis: 50%;
}
`
class FooterLinks extends Component {
  render() {
    console.log('what are the footer links props', this.props)
    const links = this.props.linkData.map(d => (
      <li>
        {/* TODO: JUAN --> Add a comment here  */}
        <Link className="list-items" to={d.content[1].data.uri}>
          {d.content[1].content[0].value}
        </Link>
      </li>
    ))
    console.log('what do links look like', links)
    return (
      <Container>
        <ul className="list">{links}</ul>
      </Container>
    )
  }
}

export default FooterLinks

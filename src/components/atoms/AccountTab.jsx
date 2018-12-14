import React, { Component } from 'react'
import Styled from 'styled-components'
import slugify from 'slugify'
import { Link } from 'gatsby'

const Container = Styled.div`
li{
margin:0;
background-color: white;
border: 1px solid black;
border-right: 0;

text-align: left;
font-size: 0.8rem;
font-weight: bold;
padding-left: 0.5rem;
cursor: pointer;

}
`

class AccountTab extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const contentName = slugify(`tab-${e.target.id}`, { lower: true })
    this.props.handleClick(contentName)
  }

  render() {
    const { tabName } = this.props
    return (
      <Container>
        <li id={tabName} onClick={this.handleClick}>
          {tabName}
        </li>
      </Container>
    )
  }
}

export default AccountTab

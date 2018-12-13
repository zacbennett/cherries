import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div`

`
class SubscriptionTypeButton extends Component {
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

export default SubscriptionTypeButton

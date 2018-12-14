import React, { Component } from 'react'
import Styled from 'styled-components'
import StyledButton from './StyledButton'

const Container = Styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
.buttonDescription {
  color: #47525E;
  font-size: 19px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}
.addSubscription{
  align-items: center;
  background-color: #E20031;
  width: 362px;
  height: 51px;
}
  
`
class ClaimSubscription extends Component {
  render() {
    let text = this.props.subscriptionType
      ? ` every ${this.props.subscriptionType} months`
      : ` every ${this.props.subscriptionType} month`
    return (
      <Container>
        <p className="buttonDescription">{`See ya ${text}`}</p>
        <StyledButton className="addSubscription">Add to Bag</StyledButton>
      </Container>
    )
  }
}

export default ClaimSubscription

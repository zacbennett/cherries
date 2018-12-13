import React, { Component } from 'react'
import Styled from 'styled-components'
import { StyledButton } from '../atoms'

const Container = Styled.div`
  .redButton {
    background-color: #FBE5E9;
    border-radius: 100%;
    width: 83px;
    height: 83px;
  }
`
class SubscriptionTypeButton extends Component {
  render() {
    let subscriptionType = this.props.type
      ? `every ${this.props.type} months`
      : `every ${this.props.type} month`
    return (
      <Container>
        <div className="redButton" />
        <h6>{this.props.text}</h6>
        <h5>{`We'll devliver ${subscriptionType}`}</h5>
        <h4>{`See ya every ${subscriptionType}`}</h4>
        <StyledButton>Add to Bag</StyledButton>
      </Container>
    )
  }
}

export default SubscriptionTypeButton

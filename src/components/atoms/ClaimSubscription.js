import React, { Component } from 'react'
import Styled from 'styled-components'
import StyledButton from './StyledButton'

class ClaimSubscription extends Component {
  render() {
    return (
      <div>
        <p>{`See ya ${this.props.subscriptionType} month`}</p>
        <StyledButton>Add to Bag</StyledButton>
      </div>
    )
  }
}

export default ClaimSubscription

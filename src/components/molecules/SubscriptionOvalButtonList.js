import React, { Component } from 'react'
import Styled from 'styled-components'
import { ClaimSubscription } from '../atoms'
import { SubscriptionOvalButton } from '../atoms'
import { MainLayout } from '../layouts'

const Container = Styled.div`
  display: flex;
  .notPressedButton {
    background-color: #FBE5E9;
    border-radius: 100%;
    width: 83px;
    height: 83px;
  }
  .pressedButton { 
      background-color: #E20031;
      border-radius: 100%;
      width: 83px;
      height: 83px;
    }
`
class SubscriptionOvalButtonList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subscriptionType: '',
      claimSubscription: false,
      clickedButton: false,
    }
    this.changeSubscription = this.changeSubscription.bind(this)
  }

  changeSubscription(subscriptionType) {
    this.setState(st => ({
      subscriptionType: subscriptionType,
      claimSubscription: true,
      clickedButton: !st.clickedButton,
    }))
  }

  render() {
    return (
      <Container>
        <h1>{this.props.buttonData.header}</h1>
        <SubscriptionOvalButton
          text={this.props.buttonData.oneMonthSubscription}
          type={''}
          changeSubscription={this.changeSubscription}
        />
        <SubscriptionOvalButton
          text={this.props.buttonData.twoMonthSubscription}
          type={'two'}
          changeSubscription={this.changeSubscription}
        />
        <SubscriptionOvalButton
          text={this.props.buttonData.threeMonthSubscription}
          type={'three'}
          changeSubscription={this.changeSubscription}
        />
        {this.state.claimSubscription || this.state.clickedButton ? (
          <ClaimSubscription subscriptionType={this.state.subscriptionType} />
        ) : (
          ''
        )}
      </Container>
    )
  }
}

export default SubscriptionOvalButtonList

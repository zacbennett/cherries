import React, { Component } from 'react'
import Styled from 'styled-components'
import { ClaimSubscription } from '../atoms'
import { SubscriptionOvalButton } from '../atoms'

const Container = Styled.div`
   justify-content: space-around;
   align-items: center;
   margin: 2rem;
  .subscriptionHeader {
    color: #47525E;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
    text-align: center;
  }
  .subscriptionButtons {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .notPressedButton {
    background-color: #FBE5E9;
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
  }
  .pressedButton { 
      background-color: #E20031;
      border-radius: 100%;
      width: 4em;
      height: 4rem;
    }
`

//Right now the subscription page is setup so that when a user clicks on a specific button
//then the add to bag button appears and other 2 buttons get disabled
//This was work in progress so you probably want to change.

//Claim subscription component that is rendered holds Add to Bag button and Description

class SubscriptionOvalButtonList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subscriptionType: { initial: true, type: '' },
      clickedButton: false,
    }
    this.changeSubscription = this.changeSubscription.bind(this)
  }

  changeSubscription(subscriptionType) {
    this.setState(st => ({
      subscriptionType: {
        initial: !st.subscriptionType.initial,
        type: subscriptionType,
      },
      clickedButton: !st.clickedButton,
    }))
  }

  render() {
    return (
      <Container>
        <div>
          <p className="subscriptionHeader">{this.props.buttonData.header}</p>
        </div>
        <div className="subscriptionButtons">
          <SubscriptionOvalButton
            text={this.props.buttonData.oneMonthSubscription}
            type={''}
            changeSubscription={this.changeSubscription}
            disabled={
              this.state.subscriptionType.type === '' ||
              this.state.subscriptionType.initial === true
                ? false
                : true
            }
          />
          <SubscriptionOvalButton
            text={this.props.buttonData.twoMonthSubscription}
            type={'two'}
            changeSubscription={this.changeSubscription}
            disabled={
              this.state.subscriptionType.type === 'two' ||
              this.state.subscriptionType.initial === true
                ? false
                : true
            }
          />
          <SubscriptionOvalButton
            text={this.props.buttonData.threeMonthSubscription}
            type={'three'}
            changeSubscription={this.changeSubscription}
            disabled={
              this.state.subscriptionType.type === 'three' ||
              this.state.subscriptionType.initial === true
                ? false
                : true
            }
          />
        </div>
        {this.state.clickedButton ? (
          <ClaimSubscription
            subscriptionType={this.state.subscriptionType.type}
          />
        ) : (
          ''
        )}
      </Container>
    )
  }
}

export default SubscriptionOvalButtonList

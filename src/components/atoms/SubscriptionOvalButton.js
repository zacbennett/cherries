import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
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
class SubscriptionOvalButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedButton: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    evt.preventDefault()
    this.setState(
      st => ({
        clickedButton: !this.state.clickedButton,
      }),
      this.props.changeSubscription(this.props.type, this.state.clickedButton)
    )
  }

  render() {
    let subscriptionType = this.props.type
      ? ` every ${this.props.type} months`
      : ` every ${this.props.type} month`

    let buttonClass = this.state.clickedButton
      ? 'pressedButton'
      : 'notPressedButton'

    return (
      <Container>
        <button onClick={this.handleClick} className={buttonClass} />
        <h6>{this.props.text}</h6>
        <h5>{`We'll deliver ${subscriptionType}`}</h5>
      </Container>
    )
  }
}

export default SubscriptionOvalButton

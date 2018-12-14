import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  .notPressedButton {
    background-color: #FBE5E9;
    border-radius: 100%;
    width: 83px;
    height: 83px;
    margin: 20px;
  }
  .pressedButton { 
    background-color: #E20031;
    border-radius: 100%;
    width: 83px;
    height: 83px;
    margin: 20px;
    }
  .buttonText {
    color: #E20031;
    font-size: 30px;
    font-weight: 700;
    line-height: 39px;
    text-align: center;
  }
  .subscriptionDescription {
    font-size: 19px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
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
        <p className="buttonText">{this.props.text}</p>
        <p className="subscriptionDescription">{`We'll deliver ${subscriptionType}`}</p>
      </Container>
    )
  }
}

export default SubscriptionOvalButton

import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  .notPressedButton {
    background-color: #FBE5E9;
    border-radius: 100%;
    width: 1rem;
    height: 1rem;
    margin: 2rem;
  }
  .pressedButton { 
    background-color: #E20031;
    border-radius: 100%;
    width: 1rem;
    height: 1rem;
    margin: 2rem;
    }
  .buttonText {
    color: #E20031;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1rem;
    text-align: center;
    margin: 2rem;
  }
  .subscriptionDescription {
    font-size: 1re,;
    font-weight: 400;
    line-height: 1rem;
    text-align: center;
    margin: 2rem;
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
        <button
          onClick={!this.props.disabled ? this.handleClick : null}
          className={buttonClass}
        />
        <p className="buttonText">{this.props.text}</p>
        <p className="subscriptionDescription">{`We'll deliver ${subscriptionType}`}</p>
      </Container>
    )
  }
}

export default SubscriptionOvalButton

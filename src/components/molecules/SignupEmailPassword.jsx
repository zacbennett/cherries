import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledInput, StyledButton, Loading } from '../atoms'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .name {
    display: flex;
    justify-content: space-between;
    width: 26.5rem;
  }
  .radio {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
    input {
      margin: 0;
      height: 1.2rem;
    }
    label {
      font-family: Lato;
      font-size: 0.8rem;
    }
  }
`

class SignupEmailPassword extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newsletter: false,
    status: 'SIGN UP',
  }
  static contextTypes = {
    firebase: PropTypes.object,
  }
  handleChange = e => {
    if (e.target.type === 'radio') {
      let newsState = !this.state.newsletter
      this.setState({
        newsletter: newsState,
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const { firebase } = this.context
    const { firstName, lastName, email, password, newsletter } = this.state
    this.setState({ status: <Loading /> })
    try {
      firebase.signupEmailPassword(
        this,
        firstName,
        lastName,
        email,
        password,
        newsletter
      )
    } catch (err) {
      console.log(err)
      this.setState({ status: 'FAILURE' })
    }
  }
  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <div className="name">
          <StyledInput
            aria-label="First Name"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            marginRight="1em"
            fontFamily="Lato"
          />
          <StyledInput
            aria-label="Last Name"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
            marginLeft="1em"
            fontFamily="Lato"
          />
        </div>
        <StyledInput
          type="email"
          aria-label="Email Address"
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          width="24.3rem"
          fontFamily="Lato"
        />
        <StyledInput
          placeholder="Password"
          aria-label="Password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
          width="24.3rem"
          fontFamily="Lato"
          marginBottom="2em"
        />
        <StyledButton
          backgroundColor="#E20031"
          borderColor="#E20031"
          fontWeight="bold"
          fontSize="16px"
          width="25.5rem"
          height="2.2rem"
          margin="0"
        >
          {this.state.status}
        </StyledButton>
        <div className="radio">
          <StyledInput
            aria-label="Newsletter"
            width="2rem"
            type="radio"
            onClick={this.handleChange}
            checked={this.state.newsletter}
            name="newsletter"
            id="newsletter"
          />
          <label for="newsletter"> I'd like to hear from Lipslut</label>
        </div>
      </Container>
    )
  }
}

export default SignupEmailPassword

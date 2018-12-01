import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledInput, StyledButton } from '../atoms'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  .radio {
    margin-top: 0.6rem;
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
      font-size: 14px;
    }
  }
`

class LoginEmailPassword extends Component {
  state = {
    email: '',
    password: '',
    remember: false,
  }
  static contextTypes = {
    firebase: PropTypes.object,
  }
  handleSubmit = e => {
    e.preventDefault()
    const { firebase } = this.context
    const { email, password } = this.state
    firebase.login(this, 'emailPassword', email, password)
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <StyledInput
          aria-label="Email Address"
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          width="24rem"
        />
        <StyledInput
          aria-label="Email Address"
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
          width="24rem"
        />
        <div className="radio">
          <StyledInput
            aria-label="Remember"
            width="2rem"
            type="radio"
            onClick={this.handleChange}
            checked={this.state.remember}
            name="remember"
            id="remember"
          />
          <label for="remember"> Remember Me</label>
        </div>
        <StyledButton
          backgroundColor="#E20031"
          borderColor="#E20031"
          fontWeight="700"
          fontSize="16px"
          width="25rem"
          height="2.2rem"
          margin="1.7rem 0 0 0"
        >
          LOG IN
        </StyledButton>
      </Container>
    )
  }
}

export default LoginEmailPassword

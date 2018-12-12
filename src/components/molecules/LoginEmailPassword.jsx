import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { StyledInput, StyledButton } from '../atoms'
import postLambda from '../../utilities/postLambda'
import { UserContext } from '../../containers/UserContext'

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
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      remember: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    let response = await postLambda('getAccount', this.state)
    let curUser = response.data.customer
    // Set state on context through UserProvider component
    this.props.userContext.setState({ curUser })
    localStorage.setItem('curUser', JSON.stringify(curUser))
    navigate(`/`)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <StyledInput
          aria-label="Email Address"
          type="email"
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          width="24rem"
        />
        <StyledInput
          aria-label="Password"
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
          width="24.3rem"
          fontFamily="Lato"
          marginBottom="2em"
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

export default () => (
  <UserContext.Consumer>
    {userContext => <LoginEmailPassword userContext={userContext} />}
  </UserContext.Consumer>
)

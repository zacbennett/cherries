import React, { Component } from 'react'
import styled from 'styled-components'

import { SideNav } from '../components'
import {
  LoginEmailPassword,
  LoginGoogle,
  LoginFacebook,
} from '../components/molecules'
import { NavLink } from '../components/atoms'
import { MainLayout } from '../components/layouts'
// import postLambda from '../../utilities/postLambda'
import { UserContext, UserProvider } from '../containers/UserContext'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  color: #47525e;
  background-color: #fbe5e9;
  font-family: Lato;
  a {
    text-decoration: none;
  }
  animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .errorMessage {
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #ffa62c;
    color: white;
    font-size: 0.8rem;
  }
  @media (max-width: 420px) {
    margin-top: 1rem;
  }
`
const windowGlobal = typeof window !== 'undefined' && window

class Login extends Component {
  state = {
    errorMessage: null,
    email: '',
    password: '',
    remember: true,
  }
  componentDidMount() {
    // this.props.resetSidebar()
  }
  handleError = errorMessage => {
    this.setState({ errorMessage: errorMessage })
  }

  render() {
    const displayError = {
      display: typeof this.state.errorMessage !== 'string' ? 'none' : 'inherit',
    }

    return (
      <MainLayout>
        <SideNav />
        <Container>
          <h2>Hey again!</h2>
          <p className="errorMessage animated fadeInRight" style={displayError}>
            {this.state.errorMessage}
          </p>
          <LoginEmailPassword handleError={this.handleError} />
          <p>or</p>
          {/* {typeof window !== 'undefined' && process.browser && (
            <React.Fragment>
              <LoginFacebook handleError={this.handleError} />
              <LoginGoogle handleError={this.handleError} />
            </React.Fragment>
          )} */}
          {windowGlobal && (
            <React.Fragment>
              <LoginFacebook handleError={this.handleError} />
              <LoginGoogle handleError={this.handleError} />
            </React.Fragment>
          )}
          <NavLink
            to="/signup"
            fontSize=".8rem"
            hovercolor="#00a6f6"
            letterSpacing="0"
          >
            Don't have an account? Create one!
          </NavLink>
          <NavLink
            to="/reset-password"
            fontSize=".8rem"
            hovercolor="#00a6f6"
            letterSpacing="0"
          >
            Forgot your password?
          </NavLink>
        </Container>
      </MainLayout>
    )
  }
}

export default Login

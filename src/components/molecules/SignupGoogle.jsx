import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledButton, GoogleIcon, Loading } from '../atoms'
import GoogleLogin from 'react-google-login'
import postLambda from '../../utilities/postLambda'
import { UserContext } from '../../containers/UserContext'
// import bcrypt from 'bcryptjs'
import { navigate } from '@reach/router'

const Container = styled.div`
  .google {
    display: flex;
    align-items: center;
    justify-content: center;
    fontSize=".8rem";
    svg {
      margin-left: 0.5rem;
    }
  }
`
class SignupGoogle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorOrLoading: '',
    }
    this.responseGoogle = this.responseGoogle.bind(this)
  }
  async responseGoogle(res) {
    this.setState({ errorOrLoading: <Loading /> })
    let userProfileId = res.getBasicProfile().getId()
    let email = res.getBasicProfile().getEmail()
    let firstName = res.getBasicProfile().ofa
    let lastName = res.getBasicProfile().wea
    let password = `${userProfileId}${process.env.GOOGLE_AUTH_KEYWORD}`
    let lambdaResponse
    try {
      lambdaResponse = await postLambda('newAccount', {
        firstName,
        lastName,
        email,
        password,
        newsletter: true,
        status: 'SIGN UP',
      })
      let curUser = lambdaResponse.data.customer
      this.props.userContext.setState({ curUser })
      // TODO: Once we have a User Homepage, redirect them here. Otherwise, for the time being, theyre being redirected to the homepage
      navigate('/')
    } catch (err) {
      this.setState({ errorOrLoading: 'Uh oh. There was an error!' })
    }
  }

  render() {
    return (
      <Container>
        <GoogleLogin
          className="google"
          clientId={process.env.GOOGLE_CLIENT_ID}
          render={renderProps => (
            <StyledButton
              onClick={renderProps.onClick}
              width="17rem"
              height="2.5rem"
              color="#D34836"
              backgroundColor="white"
              borderColor="#D34836"
              borderWidth="2px"
              hovercolor="#F9F7F1"
              margin=".5rem"
              className="google"
            >
              CONNECT WITH <GoogleIcon />
            </StyledButton>
          )}
          icon={false}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        <p className="google">{this.state.errorOrLoading}</p>
      </Container>
    )
  }
}

// OLD GOOGLE SIGNUP
//
//
// class SignupGoogle extends Component {
//   state = {
//     status: 'CONNECT WITH ',
//   }
//   static contextTypes = {
//     firebase: PropTypes.object,
//   }
//   handleGoogle = e => {
//     const { firebase } = this.context
//     this.setState({ status: <Loading /> })
//     firebase.signupGoogle(this)
//   }
//   render() {
//     return (
//       <Container>
// <StyledButton
//   onClick={this.handleGoogle}
//   width="17rem"
//   height="2.5rem"
//   color="#D34836"
//   backgroundColor="white"
//   borderColor="#D34836"
//   borderWidth="2px"
//   hovercolor="#F9F7F1"
//   margin=".5rem"
//   className="google"
// >
//   {this.state.status} <GoogleIcon />
// </StyledButton>
//       </Container>
//     )
//   }
// }

export default () => (
  <UserContext.Consumer>
    {userContext => <SignupGoogle userContext={userContext} />}
  </UserContext.Consumer>
)

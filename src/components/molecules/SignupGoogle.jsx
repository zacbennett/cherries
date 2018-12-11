import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledButton, GoogleIcon, Loading } from '../atoms'
import GoogleLogin from 'react-google-login'
import postLambda from '../../utilities/postLambda'
import { UserContext } from '../../containers/UserContext'
import bcrypt from 'bcryptjs'

const Container = styled.div`
  .google {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 0.5rem;
    }
  }
`
class SignupGoogle extends Component {
  constructor(props) {
    super(props)
    this.responseGoogle = this.responseGoogle.bind(this)
  }
  // TODO Handle Errors
  async responseGoogle(res) {
    let userProfileId = res.getBasicProfile().getId()
    let email = res.getBasicProfile().getEmail()
    let firstName = res.getBasicProfile().ofa
    let lastName = res.getBasicProfile().wea
    let password = bcrypt
      .hashSync(`${userProfileId}${process.env.GOOGLE_AUTH_KEYWORD}`, 8)
      .slice(0, 40)
    let lambdaResponse = await postLambda('newAccount', {
      firstName,
      lastName,
      email,
      password,
      newsletter: true,
      status: 'SIGN UP',
    })
    let curUser = lambdaResponse.data.customer
    this.props.userContext.setState({ curUser })
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

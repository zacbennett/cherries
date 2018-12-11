import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledButton, GoogleIcon } from '../atoms'
import GoogleLogin from 'react-google-login'
import { UserContext } from '../../containers/UserContext'
import bcrypt from 'bcryptjs'
import postLambda from '../../utilities/postLambda'

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
class LoginGoogle extends Component {
  constructor(props) {
    super(props)
    this.responseGoogle = this.responseGoogle.bind(this)
  }

  // TODO: Handle error
  async responseGoogle(res) {
    let userProfileId = res.getBasicProfile().getId()
    let email = res.getBasicProfile().getEmail()
    let password = bcrypt.hashSync(
      `${userProfileId}${process.env.GOOGLE_AUTH_KEYWORD}`,
      8
    )
    let lambdaResponse = await postLambda('getAccount', {
      email,
      password,
      remember: true,
    })
    console.log('what is the lambdaResponse:', lambdaResponse)
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

export default () => (
  <UserContext.Consumer>
    {userContext => <LoginGoogle userContext={userContext} />}
  </UserContext.Consumer>
)

// OLD GOOGLE LOGIN
//
//
// class LoginGoogle extends Component {
//   static contextTypes = {
//     firebase: PropTypes.object,
//   }

//   handleGoogle = e => {
//     // TODO: query db to check if user email exists so we save user info
//     const { firebase } = this.context
//     firebase.login(this, 'google')
//   }

//   render() {
//     return (
//       <Container>
//         <StyledButton
//           onClick={this.handleGoogle}
//           width="17rem"
//           height="2.5rem"
//           color="#D34836"
//           backgroundColor="white"
//           borderColor="#D34836"
//           borderWidth="2px"
//           margin=".5rem"
//           hovercolor="#F9F7F1"
//           letterSpacing="0"
//           className="google"
//         >
//           CONNECT WITH <GoogleIcon />
//         </StyledButton>
//       </Container>
//     )
//   }
// }

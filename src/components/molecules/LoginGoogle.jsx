import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledButton, GoogleIcon, Loading } from '../atoms'
import { UserContext } from '../../containers/UserContext'
// import bcrypt from 'bcryptjs'
import postLambda from '../../utilities/postLambda'
import { navigate } from '@reach/router'
// import GoogleLogin from 'react-google-login'

if (typeof window !== 'undefined') {
  var GoogleLogin = require('react-google-login')
}
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

class LoginGoogle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorOrLoading: '',
      render: '',
    }
    this.responseGoogle = this.responseGoogle.bind(this)
  }

  // TODO: Handle error
  async responseGoogle(res) {
    this.setState({ errorOrLoading: <Loading /> })
    let userProfileId = res.getBasicProfile().getId()
    let email = res.getBasicProfile().getEmail()
    let password = `${userProfileId}${process.env.GOOGLE_AUTH_KEYWORD}`
    try {
      let lambdaResponse = await postLambda('getAccount', {
        email,
        password,
        remember: true,
      })
      let curUser = lambdaResponse.data.customer
      // Set state on context through UserProvider component
      this.props.userContext.setState({ curUser })
      navigate('/')
    } catch (err) {
      this.setState({ errorOrLoading: 'Uh oh. There was an error!' })
    }
  }

  render() {
    return (
      <Container>
        {typeof window !== 'undefined' && (
          <GoogleLogin.GoogleLogin
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
        )}
        <p className="google">{this.state.errorOrLoading}</p>
      </Container>
    )
  }
}

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

export default () => (
  <UserContext.Consumer>
    {userContext => <LoginGoogle userContext={userContext} />}
  </UserContext.Consumer>
)

import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledButton, GoogleIcon } from '../atoms'
import GoogleLogin from 'react-google-login'
import postLambda from '../../utilities/postLambda'
import { UserContext } from '../../containers/UserContext'

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
          onSuccess={this.props.responseGoogle}
          onFailure={this.props.responseGoogle}
        />
      </Container>
    )
  }
}

export default LoginGoogle

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

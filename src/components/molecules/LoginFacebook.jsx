import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledButton, Loading } from '../atoms'
import { FaFacebookSquare } from 'react-icons/fa'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import bcrypt from 'bcryptjs'
import postLambda from '../../utilities/postLambda'
import { navigate } from '@reach/router'
import { UserContext } from '../../containers/UserContext'

const Container = styled.div`
  .facebook {
    display: flex;
    align-items: center;
    justify-content: center;
    fontSize=".8rem";
    svg {
      margin-left: 0.5rem;
    }
  }
`
class LoginFacebook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorOrLoading: '',
    }
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  // TODO: Handle error
  async responseFacebook(res) {
    this.setState({ errorOrLoading: <Loading /> })
    let email = res.email
    let password = `${res.id}${process.env.FACEBOOK_AUTH_KEYWORD}`
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
        <p className="facebook">{this.state.errorOrLoading}</p>
        <FacebookLogin
          appId={process.env.FACEBOOK_APP_ID}
          autoLoad={false}
          fields="name,email,id"
          callback={this.responseFacebook}
          render={renderProps => (
            <StyledButton
              onClick={renderProps.onClick}
              width="17rem"
              height="2.5rem"
              color="#3B539A"
              backgroundColor="white"
              borderColor="#3B539A"
              borderWidth="2px"
              margin=".5rem"
              hovercolor="#E9F6FF"
              letterSpacing="0"
              className="facebook"
            >
              CONNECT WITH <FaFacebookSquare color="#3B539A" size="1.3rem" />
            </StyledButton>
          )}
        />
      </Container>
    )
  }
}

// OLD FACEBOOK LOGIN
//
//
// class LoginFacebook extends Component {
//   static contextTypes = {
//     firebase: PropTypes.object,
//   }

//   handleFacebook = e => {
//     const { firebase } = this.context
//     firebase.login(this, 'facebook')
//   }

//   render() {
//     return (
//       <Container>
//         <StyledButton
//           onClick={this.handleFacebook}
//           width="17rem"
//           height="2.5rem"
//           color="#3B539A"
//           backgroundColor="white"
//           borderColor="#3B539A"
//           borderWidth="2px"
//           margin=".5rem"
//           hovercolor="#E9F6FF"
//           letterSpacing="0"
//           className="facebook"
//         >
//           CONNECT WITH <FaFacebookSquare color="#3B539A" size="1.3rem" />
//         </StyledButton>
//       </Container>
//     )
//   }
// }

export default () => (
  <UserContext.Consumer>
    {userContext => <LoginFacebook userContext={userContext} />}
  </UserContext.Consumer>
)

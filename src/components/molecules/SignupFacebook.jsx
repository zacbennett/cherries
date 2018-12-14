import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledButton, Loading } from '../atoms'
import { FaFacebookSquare } from 'react-icons/fa'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import postLambda from '../../utilities/postLambda'
import { UserContext } from '../../containers/UserContext'
// import bcrypt from 'bcryptjs'
import { navigate } from '@reach/router'

const Container = styled.div`
  .facebook {
    display: flex;
    align-items: center;
    justify-content: center;
    fontSize='.8rem';
    svg {
      margin-left: 0.5rem;
    }
  }
`

class SignupFacebook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorOrLoading: '',
    }
    this.responseFacebook = this.responseFacebook.bind(this)
  }
  // TODO Handle errors
  async responseFacebook(res) {
    this.setState({ errorOrLoading: <Loading /> })
    let email = res.email
    let fullName = res.name.split(' ')
    let firstName = fullName[0]
    let lastName = fullName[1]
    let password = `${res.id}${process.env.FACEBOOK_AUTH_KEYWORD}`
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

// OLD FACEBOOK SIGNUP
//
//
// class SignupFacebook extends Component {
//   state = {
//     status: 'CONNECT WITH ',
//   }
//   static contextTypes = {
//     firebase: PropTypes.object,
//   }

//   handleFacebook = e => {
//     const { firebase } = this.context
//     this.setState({ status: <Loading /> })
//     firebase.signupFacebook(this, 'facebook')
//   }

//   render() {
//     return (
//       <Container>
// ;<StyledButton
//   onClick={this.handleFacebook}
//   width="17rem"
//   height="2.5rem"
//   color="#3B539A"
//   backgroundColor="white"
//   borderColor="#3B539A"
//   borderWidth="2px"
//   margin=".5rem"
//   hovercolor="#E9F6FF"
//   letterSpacing="0"
//   className="facebook"
// >
//   {this.state.status} <FaFacebookSquare color="#3B539A" size="1.3rem" />
// </StyledButton>
//       </Container>
//     )
//   }
// }

export default () => (
  <UserContext.Consumer>
    {userContext => <SignupFacebook userContext={userContext} />}
  </UserContext.Consumer>
)

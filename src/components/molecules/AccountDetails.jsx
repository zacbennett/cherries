import React, { Component } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../containers/UserContext'

const Container = styled.ul`
  margin: 0;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 900;
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: inline-block;
  list-style: none;
  li {
    margin-top: 1rem;
  }
`

class AccountDetails extends Component {
  state = { isLoading: true }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  render() {
    const { userContext } = this.props
    const curUser = userContext.curUser

    return (
      <Container>
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h4>Account Details</h4>
            <p>
              {curUser.firstName} {curUser.lastName}
            </p>
            <p>{curUser.email}</p>
          </>
        )}
      </Container>
    )
  }
}

export default () => (
  <UserContext.Consumer>
    {userContext => <AccountDetails userContext={userContext} />}
  </UserContext.Consumer>
)

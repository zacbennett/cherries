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

class AccountBilling extends Component {
  render() {
    const { userContext } = this.props

    return (
      <Container>
        <h4>Billing</h4>
      </Container>
    )
  }
}

export default () => (
  <UserContext.Consumer>
    {userContext => <AccountBilling userContext={userContext} />}
  </UserContext.Consumer>
)

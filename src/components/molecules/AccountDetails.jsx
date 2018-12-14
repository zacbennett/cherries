import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 900;
  padding: 2rem;

  outline: 2px solid blue;
  display: inline-block;
`

class AccountDetails extends Component {
  render() {
    return (
      <Container>
        <p>Hi this is the account details</p>
      </Container>
    )
  }
}

export default AccountDetails

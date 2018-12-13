import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  top: 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 900;
  padding: 2rem;
  width: 70%;

  outline: 2px solid blue;
  display: inline-block;
`

class AccountContent extends Component {
  render() {
    return (
      <Container>
        <p>Hi this is the account content</p>
      </Container>
    )
  }
}

export default AccountContent

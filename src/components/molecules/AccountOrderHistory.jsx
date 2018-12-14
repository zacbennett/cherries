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

class AccountOrderHistory extends Component {
  render() {
    return (
      <Container>
        <p>Hi this is the order history</p>
      </Container>
    )
  }
}

export default AccountOrderHistory

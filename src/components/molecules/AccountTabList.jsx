import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 900;
  padding: 2rem;
  width: 30%;

  outline: 2px solid red;
  display: inline-block;
`

class AccountTabList extends Component {
  render() {
    let tabNames = ['account-details', 'order-history']
    let tabs = tabNames.map()

    return (
      <Container>
        <p>Hi these are the AccountTabList</p>
      </Container>
    )
  }
}

export default AccountTabList

import React, { Component } from 'react'
import styled from 'styled-components'

import { AccountDetails, AccountOrderHistory } from './'

const Container = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 900;
  padding: 2rem;

  outline: 2px solid red;
  display: inline-block;
`

class AccountContent extends Component {
  getAccountWindows() {
    const { currentContent } = this.props
    console.log('currentContent', currentContent)
    switch (currentContent) {
      case 'tab-account-details':
        return <AccountDetails />
      case 'tab-order-history':
        return <AccountOrderHistory />
    }
  }

  render() {
    const window = this.getAccountWindows()
    return (
      <Container>
        <p>Hi this is the AccountContent</p>
        {window}
      </Container>
    )
  }
}

export default AccountContent

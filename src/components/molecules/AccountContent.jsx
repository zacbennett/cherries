import React, { Component } from 'react'
import styled from 'styled-components'

import {
  AccountDetails,
  AccountSubscription,
  AccountFreeEarrings,
  AccountOrderHistory,
  AccountAddressBook,
  AccountBilling,
} from './'

const Container = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 900;
  width: 80%;
  background-color: white;

  border: 2px solid black;
  display: inline-block;
`

class AccountContent extends Component {
  getAccountWindows() {
    const { currentContent } = this.props
    // try to pass in tab name for component header (ie. Account Details)
    switch (currentContent) {
      case 'tab-account-details':
        return <AccountDetails />
      case 'tab-subscription':
        return <AccountSubscription />
      case 'tab-free-earrings':
        return <AccountFreeEarrings />
      case 'tab-order-history':
        return <AccountOrderHistory />
      case 'tab-address-book':
        return <AccountAddressBook />
      case 'tab-billing':
        return <AccountBilling />
    }
  }

  render() {
    const window = this.getAccountWindows()
    return <Container>{window}</Container>
  }
}

export default AccountContent

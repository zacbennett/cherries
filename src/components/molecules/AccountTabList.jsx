import React, { Component } from 'react'
import styled from 'styled-components'
// import slugify from 'slugify'

import { AccountDetails, OrderHistory } from './'
import { AccountTab } from '../atoms'

const Container = styled.ul`
  text-align: center;
  width: 30%;
  display: inline-block;
  list-style: none;
  margin-left: 0em;
  border: 2px solid black;
`

class AccountTabList extends Component {
  render() {
    const tabNames = [
      'Account Details',
      'Subscription',
      'Free Earrings',
      'Order History',
      'Address Book',
      'Billing',
    ]
    const tabs = tabNames.map(tabName => (
      <AccountTab
        key={tabName}
        tabName={tabName}
        handleClick={this.props.handleClick}
      />
    ))
    return <Container>{tabs}</Container>
  }
}

export default AccountTabList

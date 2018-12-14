import React, { Component } from 'react'
import Styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { AccountTabList, AccountContent } from './molecules'
import {} from './atoms'
import { UserContext } from '../containers/UserContext'

const Container = Styled.div`
  position: relative;
  display: flex;
  margin: 5rem auto;
  width: 40rem;
  height: 25rem;
`
class AccountContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentContent: 'tab-account-details',
    }
    this.changeContent = this.changeContent.bind(this)
  }

  changeContent(contentName) {
    this.setState({ currentContent: contentName })
  }

  render() {
    const tabNames = [
      'Account Details',
      'Subscription',
      'Free Earrings',
      'Order History',
      'Address Book',
      'Billing',
    ]
    const { currentContent } = this.state
    return (
      <UserContext.Consumer>
        {userContext => (
          <Container>
            <AccountTabList
              tabNames={tabNames}
              handleClick={this.changeContent}
            />
            <AccountContent
              userContext={userContext}
              tabNames={tabNames}
              currentContent={currentContent}
            />
          </Container>
        )}
      </UserContext.Consumer>
    )
  }
}

export default AccountContainer

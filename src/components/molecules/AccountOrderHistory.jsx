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

class AccountOrderHistory extends Component {
  render() {
    const { userContext } = this.props
    const orders =
      userContext.curUser &&
      userContext.curUser.orders.edges.map(edge => {
        const order = edge.node
        return (
          <li key={order.orderNumber}>
            <a href={order.statusUrl}>{order.orderNumber}</a>
          </li>
        )
      })

    return (
      <Container>
        <h4>Order History</h4>
        Order Number
        {orders}
      </Container>
    )
  }
}

export default () => (
  <UserContext.Consumer>
    {userContext => <AccountOrderHistory userContext={userContext} />}
  </UserContext.Consumer>
)

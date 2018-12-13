import React, { Component } from 'react'
import Styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { AccountTabList, AccountContent } from './molecules'
import {} from './atoms'
import { UserContext } from '../containers/UserContext'

const Container = Styled.div`
  position: relative;
  display: flex;
  margin: 5rem;
  max-width: 40rem;
  height: 30rem;
  outline: 2px solid black;
  /* position: relative;
  font-family: Montserrat;
  font-size: .8rem;
  font-weight: 700;
  color: white;
  height: 170vw;
  width: 100vw;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1; */
`
class AccountContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentContent: 'account-details',
    }
  }

  render() {
    return (
      <UserContext.Consumer>
        {userContext => (
          <Container>
            <AccountTabList />
            <AccountContent
              userContext={userContext}
              currentContent={this.state.currentContent}
            />
          </Container>
        )}
      </UserContext.Consumer>
    )
  }
}

export default AccountContainer

// export default () => (
//   <UserContext.Consumer>
//     {userContext => (
//       <StaticQuery
//         query={graphql`
//           {
//             allContentfulAccount {
//               edges {
//                 node {
//                   footerSubscriptionTitle
//                   footerSubscriptionText
//                   footerLinks {
//                     content {
//                       content {
//                         data {
//                           uri
//                         }
//                         content {
//                           value
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `}
//         render={data => {
//           return (
//             <Container>
//               <AccountTabList />
//               <AccountContent userContext={userContext} />
//             </Container>
//           )
//         }}
//       />
//     )}
//   </UserContext.Consumer>
// )

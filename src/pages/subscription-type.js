import React, { Component } from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'
import { SubscriptionOvalButtonList } from '../components/molecules'
import { MainLayout } from '../components/layouts'

const Container = Styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem: 
`

//Subscription page renders a ButtonList component which gets passed data from GraphQL query
//This data includes header and subscription description text
class SubscriptionType extends Component {
  render() {
    let data = this.props.data.allContentfulSubscriptionType.edges[0].node
    return (
      <MainLayout>
        <Container>
          <SubscriptionOvalButtonList buttonData={data} />
        </Container>
      </MainLayout>
    )
  }
}

export const query = graphql`
  {
    allContentfulSubscriptionType {
      edges {
        node {
          oneMonthSubscription
          twoMonthSubscription
          threeMonthSubscription
          header
        }
      }
    }
  }
`
export default SubscriptionType

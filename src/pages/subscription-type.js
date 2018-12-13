import React, { Component } from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'
import { MainLayout } from '../components/layouts'
import { SubscriptionTypeButton } from '../components/molecules'

const Container = Styled.div`
  width: 100%;
  height: 100vh;
	margin: 0 auto;
	display: flex;
  animation: fadein 1s; 

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  
  #sub-info-container{
    flex-basis: 50%;
    padding: 10px;
    height: 100%;
    background-color: #FBE5E9;
  }
  #subscription-image{
    flex-basis: 50%;
    width: 10%;
    height: 110%;
  }
  #sub-info-text{
    font-weight: bold;
    padding-left: 79px;
    padding-top: 50px;
    width: 563px;
  }

  p {
  color: #47525E;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 33px;
  text-align: left;
}

  #sub-header{
    color: #E20031;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    text-align: left;
  }
  .center-text{
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
  .lead{
    font-size:1.2rem
    font-weight: bold;
  }
  #get-started-button{
    background-color: #FBE5E9;
    border: none;
  }
`
class SubscriptionType extends Component {
  render() {
    console.log(this.props)
    let data = this.props.data.allContentfulSubscriptionType.edges[0].node
    return (
      <MainLayout>
        <Container>
          <h2>{data.header}</h2>
          <SubscriptionTypeButton text={data.oneMonthSubscription} type={''} />
          <SubscriptionTypeButton
            text={data.twoMonthSubscription}
            type={'two'}
          />
          <SubscriptionTypeButton
            text={data.threeMonthSubscription}
            type={'three'}
          />
          <h5>One pair of earrings in each shipment</h5>
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

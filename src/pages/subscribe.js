import React, { Component } from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'

import { HomePageHero, HomePageTryptych, SideNav } from '../components'
import { ProductList } from '../components/molecules'
import { MainLayout } from '../components/layouts'
import { HomePageButton } from '../components/atoms'
import postLambda from '../utilities/postLambda'

const Container = Styled.div`
	
animation: fadein 1s; 
  .sideNav{
    position:sticky
  };

  @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

  #image-container{
  padding: 10px;
	background: #dbdfe5;
	-webkit-flex: 1; /* Safari */
	-ms-flex: 1; /* IE 10 */
	flex: 1; /* Standard syntax */
    background-color: orange;
  }
  
  #sub-info-container{
  padding: 10px;
	-webkit-flex: 1; /* Safari */
	-ms-flex: 1; /* IE 10 */
	flex: 1; /* Standard syntax */

    height: 962px;
    background-color: #FBE5E9;
  }

  #sub-info-text{
        // white-space: pre-line;    

    padding-left: 79px;
    padding-top: 50px;
    width: 563px;
  }

  p{
  color: #47525E;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 33px;
  text-align: left;
}
h1{
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

.flex-container{
	width: 100%;
	min-height: 300px;
	margin: 0 auto;
	display: -webkit-flex; /* Safari */		
	display: flex; /* Standard syntax */
}

img{
  width: 640px;
  height: 962px;
}



`
class Subscribe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    postLambda('addSubscription', {
      id: 'Z2lkOi8vc2hvcGlmeS9DdXN0b21lci83NDA4NDQ4MzA4MjA=',
      tags: ['subscribed'],
    })
  }

  render() {
    const subscribeText = this.props.data.allContentfulSupportPage.edges[0].node
      .subscription.content

    let header
    let lead
    let textBeforeButton = []
    let textAfterButton
    let currValue

    subscribeText.forEach(function(item, index) {
      currValue = item.content[0].value
      if (index === 0) {
        header = currValue
      } else if (index === 1) {
        lead = currValue
      } else if (index === subscribeText.length - 1) {
        textAfterButton = currValue
      } else {
        textBeforeButton.push(currValue)
      }
    })

    textBeforeButton = textBeforeButton.map(function(item, i) {
      return (
        <React.Fragment key={i}>
          <p>{item} </p>
        </React.Fragment>
      )
    })

    return (
      <Container>
        <MainLayout>
          <div className="flex-container">
            <img src="https://i.redd.it/bptzx7ur4uj11.jpg" alt="image" />

            <div id="sub-info-container">
              <div id="sub-info-text">
                <h1>{header}</h1>
                <p className="lead">{lead}</p>
                <div className="center-text">
                  {textBeforeButton}
                  <button onClick={this.handleClick}>
                    <HomePageButton />
                  </button>
                  <br />
                  <p>{textAfterButton}</p>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Container>
    )
  }
}

export const query = graphql`
  {
    allContentfulSupportPage {
      edges {
        node {
          subscription {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`

export default Subscribe

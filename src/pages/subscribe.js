import React, { Component } from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'

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

    height: 100%;
    background-color: #FBE5E9;
  }

  #sub-info-text{
    font-weight: bold;
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

.flex-container{
  width: 100%;
  height: 650px;
	min-height: 300px;
	margin: 0 auto;
	display: -webkit-flex; /* Safari */		
	display: flex; /* Standard syntax */
}

#subscription-image{
  width: 640px;
  height: 100%;
}
#get-started-button{
  background-color: #FBE5E9;
    border: none;
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
    let image = this.props.data.allContentfulSubscriptionPage.edges[0].node
      .image.file.url

    const subscribeText = this.props.data.allContentfulSubscriptionPage.edges[0]
      .node.copy.content

    let header
    let lead
    let textBeforeButton = []
    let textAfterButton
    let currValue

    // The following functions pulls data from graphql and sets values
    // to be displayed based on the order in the contentful richtext field.
    // The first value becomes the header, second value is the lead.
    // The last value becomes the text after the button,
    // everything else becomes the text before the button
    subscribeText.forEach(function(item, index) {
      currValue = item.content[0].value
      if (index === 0) {
        header = currValue
      } else if (index === 1) {
        lead = currValue
      } else if (index === subscribeText.length - 1) {
        textAfterButton = <p> {currValue} </p>
      } else {
        textBeforeButton.push(
          <React.Fragment key={index}>
            <p>{currValue} </p>
          </React.Fragment>
        )
      }
    })

    return (
      <MainLayout>
        <Container>
          <div className="flex-container">
            <img src={image} id="subscription-image" alt="subscription-image" />

            <div id="sub-info-container">
              <div id="sub-info-text">
                {/* header = <h1>{header}</h1> or header = header */}
                <h1 id="sub-header">{header}</h1>
                <p className="lead">{lead}</p>
                <div className="center-text">
                  {textBeforeButton}
                  <button id="get-started-button" onClick={this.handleClick}>
                    <HomePageButton />
                  </button>
                  <br />
                  {textAfterButton}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </MainLayout>
    )
  }
}

export const query = graphql`
  {
    allContentfulSubscriptionPage {
      edges {
        node {
          image {
            file {
              url
            }
          }
          copy {
            nodeType
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

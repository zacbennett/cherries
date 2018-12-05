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
  height: 650px;
	min-height: 300px;
	margin: 0 auto;
	display: -webkit-flex; /* Safari */		
	display: flex; /* Standard syntax */
}

img{
  width: 640px;
  height: 100%;
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

    // Gets image immediately from the data and removes the element from the array to allow for the for
    let image
    let header
    let lead
    let textBeforeButton = []
    let textAfterButton
    let currValue

    // The following functions pulls data from graphql and sets values
    // to be displayed based on the order in the contentful richtext field.
    // The first value becomes the image, second value is the header, third value is the lead.
    // The last value becomes the text after the button,
    // everything else becomes the text before the button
    subscribeText.forEach(function(item, index) {
      console.log('item is ', item)

      if (index === 0) {
        image = item.data.target.fields.file.en_US.url
        console.log('image is ', image)
      } else if (index === 1) {
        header = item.content[0].value
      } else if (index === 2) {
        lead = item.content[0].value
      } else if (index === subscribeText.length - 1) {
        textAfterButton = <p> {item.content[0].value} </p>
      } else {
        textBeforeButton.push(
          <React.Fragment key={index}>
            <p>{item.content[0].value} </p>
          </React.Fragment>
        )
      }
    })

    // Refactor the code below to be contained in the forEach above
    // textBeforeButton = textBeforeButton.map(function(item, i) {
    //   return (
    //     <React.Fragment key={i}>
    //       <p>{item} </p>
    //     </React.Fragment>
    //   )
    // })

    return (
      <Container>
        <MainLayout>
          <div className="flex-container">
            <img src={image} alt="subscription-image" />

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
                  {textAfterButton}
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
              data {
                target {
                  fields {
                    file {
                      en_US {
                        url
                      }
                    }
                  }
                }
              }
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

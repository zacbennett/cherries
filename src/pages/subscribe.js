import React, { Component } from 'react'
import Styled from 'styled-components'
import { graphql, navigate } from 'gatsby'

import { MainLayout } from '../components/layouts'
import { UserContext } from '../containers/UserContext'
import { HomePageButton } from '../components/atoms'
import postLambda from '../utilities/postLambda'

const windowGlobal = typeof window !== 'undefined' && window

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
class Subscribe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick() {
    await postLambda('addSubscription', {
      id: this.props.userContext.curUser.id,
      tags: ['subscribed'],
    })
    let curUser = { ...this.props.userContext.curUser, tags: ['subscribed'] }
    this.props.userContext.setState({ curUser })
    windowGlobal.localStorage.setItem('curUser', JSON.stringify(curUser))
    navigate(`/`)
  }

  render() {
    console.log('subscribe this.props.userContext', this.props.userContext)
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
          <img src={image} id="subscription-image" alt="subscription-pic" />
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

// userContext is resetting everytime it get rendered -- need to figure out how to persist across renderings
// Because we are exporting function, graphql query needs to be explicitly passed into Subscribe component (instead of Gatsby automatically implicitly passing in)
// Need to wrap components with UserProvider so userContext can be accessed (doesn't work if put Provider in the return)
export default props => (
  <UserContext.Consumer>
    {userContext => <Subscribe userContext={userContext} data={props.data} />}
  </UserContext.Consumer>
)

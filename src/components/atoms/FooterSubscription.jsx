import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
display: flex;
flex-basis: 50%;
maxHeight: 200px;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
button {
  
}
`

class FooterSubscription extends Component {
  render() {
    return (
      <Container>
        {/* TODO: Find out if Niki wants this to be dynamic from Contentful */}
        <div>
          <h4>Join the Cherries fam</h4>
          <p style={{ maxWidth: '20.8rem' }}>
            Sign up to be the first to know about new products, get exclusive
            discounts, and other special stuff :)
          </p>
          {/* TODO:  Move to separate component */}
          <form>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" style={{ width: '16rem' }} />
            <button
              style={{
                marginLeft: '12px',
                height: '32px',
                backgroundColor: '#13CE66',
                color: '#47525E',
                border: 'none',
                width: '6.5rem',
                paddingTop: '2px',
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </Container>
    )
  }
}

export default FooterSubscription

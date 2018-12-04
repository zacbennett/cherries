import React, { Component } from 'react'
import Styled from 'styled-components'
import { FooterSubscription, FooterLinks } from './atoms'

const Container = Styled.div`
  position: relative;
  background-color: #E20031;
  font-family: Montserrat;
  font-size: .8rem;
  font-weight: 700;
  color: white;
  height: 15vw;
  width: 100vw;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 2;
`
class Footer extends Component {
  render() {
    return (
      <Container>
        <FooterSubscription />
        <FooterLinks />
      </Container>
    )
  }
}

export default Footer

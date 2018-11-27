import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import Layout from '../components/layout'
import Image from '../components/image'
import HeroImage from '../components/hero-image'

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadein 1s;
  @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`

const IndexPage = () => (
  <Container>
    <HeroImage />
    <h1>Cherries</h1>
    <p>Welcome to Cherries.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Container>
)

export default IndexPage

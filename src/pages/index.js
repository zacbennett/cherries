import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import Layout from '../components/layout'
import Image from '../components/image'
import HeroImage from '../components/homepage-hero-image'
import HomepageTryptych from '../components/homepage-tryptych'
import ProductList from '../components/product-list'
import ProductCard from '../components/product-card'

const Container = Styled.div`
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
    <ProductList />
    <HomepageTryptych />
  </Container>
)

export default IndexPage

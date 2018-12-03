import React from 'react'
import styled from 'styled-components'

import { NavBar, Product } from '../components'
import { MainLayout } from '../components/layouts'

const ProductPage = () => (
  <MainLayout>
    <NavBar />
    <Product />
  </MainLayout>
)

export default ProductPage

import React, { Component } from 'react'
import styled from 'styled-components'

import { Product, SideNav } from '../components'
import { MainLayout } from '../components/layouts'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  padding-top: 40px;
`

class ProductTemplate extends Component {
  // componentDidMount() {
  //   this.props.resetSidebar()
  // }
  render() {
    console.log('what are the props?', this.props)
    const data = this.props.pageContext.node
    const images = data.images.map(img => img.file.url)

    const details = data.details
      ? data.details.content.map(c => c.content[0].value)
      : []
    return (
      <MainLayout>
        <SideNav />
        <Container>
          <div>
            <Product
              title={data.title}
              productCopy={data.productCopy.content}
              images={images}
              price={data.price}
              sku={data.sku}
              details={details}
            />
          </div>
        </Container>
      </MainLayout>
    )
  }
}

export default ProductTemplate

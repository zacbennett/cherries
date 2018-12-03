import React, { Component } from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  font-size: 0.8rem;
`

class ProductDetail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('vat are zee pruhps?', this.props)
    return (
      <Layout>
        <h4>Details</h4>
        <p>Materials: {this.props.materials}</p>
        <p>Closure: {this.props.closure}</p>
        <p>Allergy Information: {this.props.allergy}</p>
      </Layout>
    )
  }
}

export default ProductDetail

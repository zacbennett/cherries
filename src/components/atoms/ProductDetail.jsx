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
    const details = this.props.details.map(d => <p>{d}</p>)
    return (
      <Layout>
        <h4>Details</h4>
        {details}
      </Layout>
    )
  }
}

export default ProductDetail

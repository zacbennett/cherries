import React, { Component } from 'react'
import styled from 'styled-components'

/** Component that renders cart icon that we have queried from contentful and passed down as props.
 */

const Container = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 0.2rem;
  p {
    position: relative;
    cursor: pointer;
    margin: 0;
    padding: 0;
    right: 0.8rem;
    width: 1.1rem;
    height: 1.1rem;
    color: white;
    line-height: 1.2rem;
    font-size: 0.65rem !important;
    border-radius: 1000px;
    background-color: #ff0086;
    text-align: center;
  }
`

class ShoppingBagIcon extends Component {
  render() {
    const { click } = this.props
    return (
      <Container>
        <img
          style={{
            marginRight: 20,
            marginBottom: 5,
            marginLeft: 10,
            maxWidth: 23.92,
            maxHeight: 26,
          }}
          src={this.props.cartIcon}
          alt="search-icon"
        />
      </Container>
    )
  }
}

export default ShoppingBagIcon

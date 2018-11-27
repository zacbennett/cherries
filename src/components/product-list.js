import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ProductCard from './product-card'

const Container = styled.div`
  .product-list-container {
    margin: 0 auto
    width: 75vw;
  }
  .product-list-card-container {
    display: flex;
    justify-content: space-between;
  }
  .product-list-header{
   color: #E20031 ;
   font-weight: 700
   font-size: 20px;
   margin-bottom: 0

  }
  a{
    color: #E20031 ;
  };
  .product-list-subheader{
    margin-left: 30px
  }
`

let tempArray = [1, 2, 3, 4]
let products = tempArray.map(product => <ProductCard className="ProductCard" />)

export default () => (
  // Refactor to display image/name/price based on props passed in
  <Container>
    <div className="product-list-container">
      <p className="product-list-header">
        <i>Fresh picks</i>{' '}
        <Link>
          <u>
            <i>
              <small>
                <span className="product-list-subheader">Shop all</span>
              </small>
            </i>
          </u>
        </Link>
      </p>
      <div className="product-list-card-container">{products}</div>
    </div>
  </Container>
)

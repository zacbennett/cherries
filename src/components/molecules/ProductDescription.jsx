import React, { Component } from 'react'
import styled from 'styled-components'
import {
  StyledHr,
  StyledButton,
  QuantityAdjustButton,
  ProductDetail,
} from '../atoms'
import { ProductOrder } from '../molecules'

const Layout = styled.div`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .purchase {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    @media (max-width: 420px) {
      flex-direction: column;
    }
  }
  .price {
    font-size: 0.9rem;
    text-align: center;
    padding: 0.5rem;
    margin: 0;
    color: #ff009a;
    height: 2.5rem;
    width: 5rem;
  }
  h1 {
    white-space: nowrap;
    overflow: visible;
    width: 23rem;
  }

  @media (max-width: 420px) {
    padding: 0rem;
    hr {
      margin-left: 0;
      margin-right: 0;
    }
  }
`

class ProductDescription extends Component {
  state = {
    quantity: 1,
    price: this.props.price,
    status: 'ADD TO BAG',
    oneTimePurchase: true,
  }
  handleChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }
  handleAdjust = e => {
    let newQuantity
    if (e.target.className === 'add') {
      newQuantity = this.state.quantity + 1
      this.setState({ quantity: newQuantity })
      this.handlePrice(newQuantity)
    } else {
      if (this.state.quantity > 1) {
        newQuantity = this.state.quantity - 1
        this.setState({ quantity: newQuantity })
        this.handlePrice(newQuantity)
      }
    }
  }
  handlePrice = quantity => {
    const newPrice = quantity * this.props.price
    this.setState({
      price: newPrice.toFixed(2),
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.handleCart(
      'add',
      this.props.title,
      this.props.price,
      parseInt(this.state.quantity),
      this.props.images[0],
      this.props.sku
    )
    console.log('item added')
    this.setState({ status: 'ADDED!' })
  }
  render() {
    const productCopy = this.props.productCopy.map((statement, i) => {
      if (statement.content.length === 1)
        return <p key={i}>{statement.content[0].value}</p>
      else {
        // Turn Special marks into subsequent html modifiers
        let fullClause = []
        statement.content.forEach(clause => {
          if (clause.marks.length > 0) {
            if (clause.marks[0].type === 'bold')
              fullClause.push(<b>{clause.value}</b>)
          } else fullClause.push(clause.value)
        })
        return <p key={i}>{fullClause}</p>
      }
    })
    return (
      <Layout>
        <h1>{this.props.title}</h1>
        {productCopy}
        <StyledHr width={'100%'} margin={'.8rem'} />
        <div>
          <ProductOrder
            price={this.state.price}
            handleAdjust={this.handleAdjust}
            handleChange={this.handleChange}
          />
        </div>
        <form className="purchase" onSubmit={this.handleSubmit}>
          <QuantityAdjustButton
            quantity={this.state.quantity}
            handleAdjust={this.handleAdjust}
            id={''}
            color={'#E20031'}
            height={'2.5rem'}
            width={'3rem'}
          />
          <StyledButton height={'2.5rem'} width={'18rem'} fontSize={'.65rem'}>
            <b>{this.state.status}</b>
          </StyledButton>
        </form>
        <ProductDetail details={this.props.details} />
      </Layout>
    )
  }
}

export default ProductDescription

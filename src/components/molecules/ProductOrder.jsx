import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  [type='radio']:checked,
  [type='radio']:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type='radio']:checked + label,
  [type='radio']:not(:checked) + label {
    position: relative;
    padding-left: 42px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  [type='radio']:checked + label:before,
  [type='radio']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 26px;
    height: 26px;
    border: 2px solid #e20031;
    border-radius: 100%;
    background: #fff;
  }
  [type='radio']:checked + label:after,
  [type='radio']:not(:checked) + label:after {
    content: '';
    width: 26px;
    height: 26px;
    background: #e20031;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 100%;
  }
  [type='radio']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type='radio']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .purchase-text {
    padding-right: 42px;
  }
`

class ProductOrder extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container>
        <form action="#">
          <p>
            <input
              className="purchaseSelector"
              type="radio"
              name="radio-group"
            />
            <label for="one-time-purchase">
              {' '}
              <span className="purchase-text"> One-Time Purchase:</span>
              <strong onClick={this.props.handleAdjust}>{`${
                this.props.price
              }`}</strong>
            </label>
          </p>
          <p>
            <input type="radio" name="radio-group" />
            <label className="purchaseSelector" for="subscribe">
              {' '}
              <span className="purchase-text">Subscribe and Save:</span>{' '}
              <strong>$10/mo</strong>
            </label>
          </p>
        </form>
      </Container>
    )
  }
}

export default ProductOrder

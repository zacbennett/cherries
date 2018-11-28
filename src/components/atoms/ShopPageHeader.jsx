import React, { Component } from 'react'
import Styled from 'styled-components'
import NavLink from './NavLink'

/** Overview of DropdownMenu component:
 *  - Created a styled div container that wraps DropdownMenu
 *  - State is initially false
 *  - Have two functions that either display or hide the dropdown menu depending on mouse hover
 *  - DropdownMenu renders links passed down from NavButtons (Help and Signin)
 */

const Container = Styled.div`
.shop-list-container {
  margin: 0 auto
  width: 75vw;
}
.shop-list-card-container {
  display: flex;
  flex-wrap:wrap
  justify-content: space-between;
}
.shop-list-header{
 color: #E20031 ;
 font-weight: 700
 font-size: 20px;
 margin-bottom: 0

}
a{
  color: #E20031 ;
};
.shop-form input{
  float: left;
  display: inline-block;
  flex-flow: row wrap;
  margin-right: auto;
}
`
//TODO: Get dropdown on the same line as text

class ShopPageHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shopDropdown: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    //PROP METHOD GOES HERE
    this.setState({ shopDropdown: '' })
  }

  render() {
    // console.log('we get to shoppageheader', this.state)
    return (
      <Container>
        <div className="shop-list-container">
          <p className="shop-list-header">
            <i>ShopPageHeader hold</i>
          </p>
          <div className="shop-form">
            <form htmlFor="shopDropdown" onSubmit={this.handleSubmit}>
              <select
                name="shopDropdown"
                id="shopDropdown"
                onChange={this.handleChange}
                value={this.state.shopDropdown}
              >
                <option value="sortBy">Sort by</option>
                <option value="featured">Featured</option>
                <option value="recentlyAdded">Recently Added</option>
                <option value="rating">Rating</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </form>
          </div>
        </div>
      </Container>
    )
  }
}

export default ShopPageHeader

import React, { Component } from 'react'
import styled from 'styled-components'
import { MainLayout } from '../layouts'
import { graphql, navigate } from 'gatsby'
import Redirect from '@reach/router'
import { IoIosClose } from 'react-icons/io'

const Container = styled.div`
  width: 100%;
  z-index: 2;
  .popup {
    position: fixed;
    width: 100%;
    height: 300px;
    margin: auto;
    background-color: #fbe5e9;
  }
  .popupInner {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    width: 75%;
  }

  input {
    background-color: #fbe5e9;
    border: 0px;
    border-bottom: 2px solid black;
    width: 100%;
  }
  #searchForm {
    width: 100%;
    position: relative;
  }
  input:focus {
    outline: none;
    border-bottom: 4px solid black;
  }
  #search-image {
    width: 28px;
    height: 28px;
  }

  #search-button {
    background-color: transparent;
    border: 0px;
    margin: 0 auto;
  }
  #button-container {
    text-align: center;
    width: 100%;
  }
  #close-button {
    height: 50px;
    width: 50px;
    margin-right: 2rem;
  }
  #search-bar-text {
    text-align: center;
    font-weight: bold;
  }
`

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleClick() {
    console.log('HELLO', this.props)
    this.props.togglePopup()
  }

  render() {
    console.log('HELLO', this.props)

    return (
      <Container>
        <div className="popup">
          <div>
            <IoIosClose id="close-button" onClick={this.handleClick} />
          </div>
          <div className="popupInner">
            <form id="searchForm" action="/catalog">
              <div id="button-container">
                <button id="search-button">
                  <img id="search-image" src={this.props.searchIcon} alt="" />
                </button>
              </div>
              <input onChange={this.handleChange} name="search" type="text" />
            </form>
            <div id="search-bar-text">
              <p>What are you looking for?</p>
              <p>Product name, type, color (or anything)</p>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Search

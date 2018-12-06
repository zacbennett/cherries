import React, { Component } from 'react'
import styled from 'styled-components'
import { MainLayout } from '../layouts'
import { graphql, navigate } from 'gatsby'
import Redirect from '@reach/router'
import { IoIosClose } from 'react-icons/io'

const Container = styled.div`
  animation: fadein 0.4s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  width: 100%;
  .popup {
    z-index: 10;
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
    text-align: center;

    background-color: #fbe5e9;
    border: 0px;
    border-bottom: 2px solid black;
    width: 100%;
  }

  #search-form {
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

  #search-button:hover {
    cursor: pointer;
  }
  #close-button:hover {
    cursor: pointer;
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
    padding-top: 1rem;
    line-height: 0.1rem;
  }
  .grayed-out {
    margin: auto;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 900px;
    z-index: 2;
    display: flex;
    position: absolute;
    height: 100vh;
    justify-content: center;
    margin-top: -80px;
    align-items: center;
    overflow: hidden;
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
        <div className="grayed-out">
          <div className="popup">
            <div>
              <IoIosClose id="close-button" onClick={this.handleClick} />
            </div>
            <div className="popupInner">
              <form id="search-form" action="/catalog">
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
        </div>
      </Container>
    )
  }
}

export default Search

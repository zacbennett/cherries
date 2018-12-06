import React, { Component } from 'react'
import styled from 'styled-components'
import { MainLayout } from '../layouts'
import { graphql, navigate } from 'gatsby'
import Redirect from '@reach/router'

const Container = styled.div`
  width: 100%;
  background-color: white;
  .popup {
    position: fixed;
    width: 100%;
    height: 50%;
    margin: auto;
    background-color: #fbe5e9;
    display: flex;
    justify-content: center;
  }
  .popupInner {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  button {
    margin: 1rem;
  }
`

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    return (
      <Container>
        <div className="popup">
          <div className="popupInner">
            <form id="searchForm" action="/catalog">
              <input onChange={this.handleChange} name="search" type="text" />
              <button>Search!</button>
            </form>
          </div>
        </div>
      </Container>
    )
  }
}

export default Search

import React, { Component } from 'react'
import styled from 'styled-components'
import { MainLayout } from '../components/layouts'
import { graphql, navigate } from 'gatsby'
import Catalog from './catalog'
import Redirect from '@reach/router'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  color: #47525e;
  background-color: #fbe5e9;
  font-family: Lato;
  a {
    text-decoration: none;
  }
  animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .errorMessage {
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #ffa62c;
    color: white;
    font-size: 0.8rem;
  }
  @media (max-width: 420px) {
    margin-top: 1rem;
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
      <MainLayout>
        <Container>
          <h2>Testing Search</h2>
          <form action="/catalog">
            <input onChange={this.handleChange} name="search" type="text" />
            <button>Search!</button>
          </form>
        </Container>
      </MainLayout>
    )
  }
}

export default Search

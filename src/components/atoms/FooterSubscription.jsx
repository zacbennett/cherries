import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  display: flex;
  flex-basis: 50%;
  max-height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  button {
    
  }
  input{
    width: 16rem;
  }
`

class FooterSubscription extends Component {
  state = {
    email: '',
    status: 'Sign Up',
  }

  handleSubmit = e => {
    e.preventDefault()
    let email = this.state.email

    // Netlify Form Encoding for Email Subscriberes
    const encode = data => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'email', email }),
    })
    this.setState({ email: '', status: 'Added!' })
  }

  handleChange = e => {
    this.setState({
      email: e.target.value,
    })
  }

  render() {
    return (
      <Container>
        <div>
          <h4>{this.props.title}</h4>
          <p style={{ maxWidth: '20.8rem' }}>{this.props.text}</p>
          <form onSubmit={this.handleSubmit} name="email" netlify>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <button
              style={{
                marginLeft: '12px',
                height: '32px',
                backgroundColor: '#13CE66',
                color: '#47525E',
                border: 'none',
                width: '6.5rem',
                paddingTop: '2px',
              }}
            >
              {this.state.status}
            </button>
          </form>
        </div>
      </Container>
    )
  }
}

export default FooterSubscription

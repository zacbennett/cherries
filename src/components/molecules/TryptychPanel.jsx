import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  width: 25rem;
  font-size: 1rem;
  font-weight: 900;
  padding: 2rem;
  .tryptych-panel-image {
    height: 5rem;
    margin: 0 auto;
  }

  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

class TryptychPanel extends Component {
  render() {
    return (
      <Container>
        <div className="tryptych-panel">
          <img
            src={this.props.imageUrl}
            alt={this.props.imageName}
            className="tryptych-panel-image"
          />
          <p className="tryptych-panel-text">{this.props.text}</p>
        </div>
      </Container>
    )
  }
}

export default TryptychPanel

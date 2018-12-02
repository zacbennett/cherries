import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  // border: 1px solid black;
  width: 220px;
  font-size: 13px;
  font-weight: bold;
  .tryptych-panel-image {
    width: 60px;
    margin: 0 auto;
  }
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

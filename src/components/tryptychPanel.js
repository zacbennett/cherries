// Component for each panel on tryptych, rendering passed in image and information

import React, { Component } from 'react'

class TryptychPanel extends Component {
  render() {
    return (
      <div id="tryptych-panel-container">
        <div className="tryptych-panel">
          <img
            src={this.props.imageUrl}
            alt={this.props.imageName}
            className="tryptych-panel-image"
          />
          <p className="tryptych-panel-text">{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default TryptychPanel

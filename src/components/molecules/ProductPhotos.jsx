import React, { Component } from 'react'
import styled from 'styled-components'
import 'animate.css'

const Layout = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  img {
    transition: 0.5s;
  }
  .photoCarousel {
    img {
      max-height: 8rem;
      opacity: 0.5;
    }
    display: flex;
    overflow: auto;
    padding-right: 10px;
  }
  .animation {
    animation: fadein 1.25s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .highlight {
    margin-bottom: 1rem;
    width: 90%;
  }

  @media (max-width: 420px) {
    padding: 0rem;
    width: 98%;
    .photoCarousel {
      overflow: auto;
    }
  }
`
class ProductPhotos extends Component {
  state = {
    highlight: 0,
    animation: false,
  }
  handlePhoto = e => {
    this.setState({
      highlight: parseInt(e.target.name),
      animation: !this.state.animation,
    })
  }

  render() {
    const animation = `highlight animated ${
      this.state.animation ? 'animation' : 'fadeIn'
    }`
    const images = this.props.images.map((image, i) => (
      <img
        src={image}
        alt={'Product Page Image' + i}
        key={i}
        name={i}
        onClick={this.handlePhoto}
        style={this.state.highlight === i ? { opacity: 1 } : {}}
      />
    ))
    const highlight = (
      <img
        src={this.props.images[this.state.highlight]}
        alt="Highlighted Product"
        className={animation}
      />
    )
    return (
      <Layout>
        {highlight}
        <div className="photoCarousel animated slideInRight">{images}</div>
      </Layout>
    )
  }
}

export default ProductPhotos

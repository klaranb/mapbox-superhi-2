import React, { Component } from 'react';
import "./Toggler.css";
import './main.css';

class Toggler extends Component {
  setLayer(url) {
    this.props.app.setState({
      style: url
    })
  }

  render () {
    const styles = [
      { name: "Le Shine", url: "mapbox://styles/klaranb/ckkn2desv4wh817t6o4fvwk2y"},
      { name: "Frank", url: "mapbox://styles/klaranb/ckklgoi8x3rhe17phdqseewxr"},
      { name: "Star", url: "mapbox://styles/klaranb/ckkn7ml9v5gv617qir4vhnq0n"},
      { name: "Standard", url: "mapbox://styles/klaranb/ckklhkbdo3se617nsmfsa8o9e"},
      { name: "Treasure", url: "mapbox://styles/klaranb/ckl0xwgxc0zkt17o1skgqp0ud"},
      { name: "Bright", url: "mapbox://styles/klaranb/ckkn2iaja5btx17pfknzcu02y"},
      { name: "Moody", url: "mapbox://styles/klaranb/ckl0w86800y1f17l53mjq39ra"},

      { name: "Grey", url: "mapbox://styles/klaranb/ckl0yd9yx104k17s0awamums4"},
      { name: "Gold", url: "mapbox://styles/klaranb/ckl0vjyfj0xe617pdpj4fq6np"},
      { name: "Green", url: "mapbox://styles/klaranb/ckl0v3eui0wu717o106ay9i9w"},
      { name: "Blue", url: "mapbox://styles/klaranb/ckkmzyje358vb17o27yrm6g9b"},
      { name: "Violet", url: "mapbox://styles/klaranb/ckl0ujwve0uqy17o7n6t18ixj"},
      { name: "Black", url: "mapbox://styles/klaranb/ckkn487aw5d7p17phc9s21wzn"}



    ]
    const buttons = styles.map((style, index) => {
      let className = ""

      if (style.url === this.props.app.state.style) {
        className ="selected"
      }

      return <button className={className} key={index} onClick={() => this.setLayer(style.url)}>
            {style.name}
        </button>
    })


    return (
      <div className="toggler">
        <h3 className="instructions">Instructions</h3>
        <p className="instructions">
        Search for a location and press enter. Click the location name to jump to it on the map. Zoom in enough to see smaller streets.
        </p>
        <h3 className="styles">Map Styles</h3>
        <div className="toggler-buttons">
          {buttons}
        </div>
      </div>
      )
  }
}

export default Toggler;

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
      { name: "Satellite", url: "mapbox://styles/klaranb/ckklcfk2x3ncy17nwmc9wvkyx"},
      { name: "Dark", url: "mapbox://styles/mapbox/dark-v9"},
      { name: "Light", url: "mapbox://styles/mapbox/light-v9"},
      { name: "Frank", url: "mapbox://styles/klaranb/ckklgoi8x3rhe17phdqseewxr"},
      { name: "Standard", url: "mapbox://styles/klaranb/ckklhkbdo3se617nsmfsa8o9e"}
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
        Search for a formative location and press enter. Click the location name to jump to it on the map. Zoom in enough to see smaller streets.
        </p>
        <p>
        Flip through the map styles and screenshot one of them. Repeat the process with the rest of your locations. Each location can be a different style or be the same.
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

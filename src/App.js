import React, { Component } from 'react';
import Map from './Map';
import Toggler from './Toggler';
import Search from './Search';
import PlacesPanel from './PlacesPanel';
import './main.css';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 40.7112,
      longitude: -74.001,
      style: 'mapbox://styles/klaranb/ckkn2desv4wh817t6o4fvwk2y',
      places: [

      ]
    }
  }

  render () {
    return (
      <div className="App">
        <PlacesPanel app={this}></PlacesPanel>
        <Search app={this}></Search>
        <Toggler app={this}></Toggler>
        <Map app={this}></Map>
      </div>
    )
  }
}

export default App;

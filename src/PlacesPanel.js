import React, { Component } from 'react';
import PlaceItem from './PlaceItem';
import "./PlacesPanel.css";
import './main.css';

class PlacesPanel extends Component {
  render () {
    const places = this.props.app.state.places

    let placeItems = <div className='no-results'>Nothing added yet</div>
    if (places.length > 0) {
      placeItems = places.map((place, index) => {
        return <PlaceItem places={place} app={this.props.app} key={index}></PlaceItem>
      })
    }

    return (
      <div className="places">
        <div className="places-inner">
          {placeItems}
        </div>
      </div>
    )
  }
}

export default PlacesPanel;

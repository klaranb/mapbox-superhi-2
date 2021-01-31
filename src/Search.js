import React, { Component } from 'react';
import "./Search.css"
import {ReactComponent as SearchIcon} from './search.svg';
import './main.css';

class Search extends Component {
    constructor(props) {
    super(props)

    this.state = {
      value: "",
      isLoading: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const accessToken = "pk.eyJ1Ijoia2xhcmFuYiIsImEiOiJja2tqcXY4N28wajd2Mm9zN3czajlyODdsIn0.Fnmyp9JDwZZJEDDIr-upwA"
    const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`

    fetch(url)
      .then(response => response.json ())
      .then(data => {

        const places = this.props.app.state.places
        const firstResult = data.features.[0]

        places.push({
          name: this.state.value,
          longitude: firstResult.center[0],
          latitude: firstResult.center[1]
        })

        this.props.app.setState({
          places: places
        })

        this.setState({
          value:''
        })

    })

  }

  render() {
    return (
        <div className="formContainer">
          <SearchIcon className="search-icon"/>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.value} onChange={this.handleChange} placeholder="Search for place..."/>
          </form>
        </div>

    )
  }
}

export default Search;

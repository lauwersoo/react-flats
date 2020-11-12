import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import appartement from './appartement';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class googleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAsmKdgd9ZvCsPzU6rzmBPa0q-ZekEoG9I" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
 }

export default googleMaps

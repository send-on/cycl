import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { GOOGLE_API_KEY } from './config.js';
import './App.css';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const latLng = [
  { name: "Notre-Dame &Louvre at your doorstep", lat: 48.860059285334664, lng: 2.3474471021375654 },
  { name: "Charming room in spacious apartment", lat: 48.85139133871688, lng: 2.385443004692208 },
  { name: "Charming studio with postcard view", lat: 48.857710753532366, lng: 2.3566038107155203 },
]

export class MapContainer extends React.Component<Props> {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 48.860059285334664, lng: 2.3474471021375654 }}
      >
        {latLng.map((place, index) => (
          <Marker
            key={index}
            position={{ lat: place.lat, lng: place.lng }}
            title="Click to zoom"
          // onClick={props.onToggleOpen.bind(this, i)}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          {/* <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div> */}
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapContainer);

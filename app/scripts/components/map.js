const React = require('react');
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from "react-google-maps";

// <Map />
class Map extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      ready: this.props.ready,
      marker: {
        center: {
          lat: 42.752532,
          lng: -73.768126,
        },
        markers: [
          {
            position: {
              lat: 42.752532, 
              lng: -73.768126,
            },
            showInfo: true
          }
        ]
      },
    }
  }
  
  componentWillReceiveProps() {
    this.setState({
      ready: true,
      marker: {
        center: {
          lat: 42.752532,
          lng: -73.768126,
        },
        markers: [
          {
            position: new google.maps.LatLng(42.752532, -73.768126),
            showInfo: true
          }
        ]
      }
    })
  }
  
  renderMarker(marker, index) {
    return (
      <Marker key={index} position={marker.position} />
    )
  }
  
  render() {
    const marker = this.state.marker.markers;
    return (
      <GoogleMapLoader
        containerElement={
          <div className="map" />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 42.752532, lng: -73.768126 }}
            defaultOptions={{
              styles: require("json!./map-styles/pale.json"),
              scrollwheel: false,
              disableDefaultUI: true,
              draggable: false,
            }}
          >
            {marker.map(this.renderMarker)}
          </GoogleMap>
        }
      />
  );
  }
};

export default Map;
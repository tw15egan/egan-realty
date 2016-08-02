const React = require('react');
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from "react-google-maps";

// <Map />
class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderMarker(marker, index) {
    return (
      <Marker key={index} position={marker.position} />
    )
  }
  
  render() {
    
    if (google) {
      console.log('goog');
      var state = {
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
      };
    } else {
      console.log('hi');
      var state = {
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
      };
    }
    
    return (
      <GoogleMapLoader
        containerElement={
          <div className="map" />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 42.752532, lng: -73.768126 }}
            defaultOptions={{
              styles: require("json!./map-styles/pale.json"),
              scrollwheel: false,
              disableDefaultUI: true,
              draggable: false,
            }}
          >
            {state.markers.map(this.renderMarker)}
          </GoogleMap>
        }
      />
  );
  }
};

export default Map;

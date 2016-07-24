const React = require('react');
import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from "react-google-maps";

// <Map />
class Map extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      center: {
        lat: 42.8052279,
        lng: -73.9067515,
      },
      markers: [
        {
          position: new google.maps.LatLng(42.8055797, -73.906444),
          showInfo: true
        }
      ]
    }
  }
  
  renderMarker(marker, index) {
    return (
      <Marker key={index} position={marker.position} />
    )
  }
  
  render() {
    return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: "500px",
              width: "100vw"
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={15}
            defaultCenter={{ lat: 42.8052279, lng: -73.9067515 }}
            defaultOptions={{
              styles: require("json!./map-styles/pale.json"),
              scrollwheel: false,
              disableDefaultUI: true,
            }}
          >
            {this.state.markers.map(this.renderMarker)}
          </GoogleMap>
        }
      />
    </section>
  );
  }
};

export default Map;

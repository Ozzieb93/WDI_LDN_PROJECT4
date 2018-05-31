/* global google */
import React from 'react';


class Map extends React.Component {

  constructor() {
    super();
    this.markers =[];
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapDiv, {
      center: this.props.center,
      zoom: 14
    });

    this.marker = new google.maps.Marker({
      position: this.map.getCenter(),
      map: this.map,
      label: ''
    });
  }


  componentWillUnmount() { /* Removing compnent from a page */
    this.marker.setMap(marker => marker.setMap(null));
    this.markers=null;
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }

  render() {
    const className = this.props.className ? this.props.className + ' map' : 'map';
    return (
      <div className={className} ref={el => this.mapDiv = el}/>
    );
  }
}

export default Map;

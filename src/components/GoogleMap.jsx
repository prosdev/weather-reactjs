import React, {Component} from 'react';

class GoogleMap extends Component {
    /**
     * Fetches appropriate google map data on componentDidMount
     *
     * @event componentDidMount
     * @return {undefined}
     */
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center : {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return (
            <div ref="map" />
        )
    }
}

export default GoogleMap;
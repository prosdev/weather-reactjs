import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineChart from '../components/LineChart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => ((weather.main.temp * 9/5) - 459.67));
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><LineChart data={temps} color="orange" units="°F"/></td>
                <td><LineChart data={pressure} color="green" units="hPa"/></td>
                <td><LineChart data={humidity} color="black" units="%"/></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {
        weather
    }
}

export default connect(mapStateToProps)(WeatherList);
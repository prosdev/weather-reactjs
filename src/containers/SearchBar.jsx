import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

/**
 * SeachBar container component. Handles user search terms via inputs
 * @class Component.SearchBar
 * @extends React.Component
 */
class SearchBar extends Component {
    /**
     * Constructor for the SearchBar component. Sets initial state.
     *
     * @event constructor
     * @constructor
     * @returns {undefined}
     */
    constructor(props) {
        super(props);

        this.state = {term : ''}
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    /**
     * onInputChange method. Keeps track of user input in the SearchBar.
     *
     * @event onInputChange
     * @return {undefined}
     */
    onInputChange(event) {
        this.setState({term: event.target.value});
    }
    /**
     * onFormSubmit method. Handler for SearchBar submission.
     *
     * @event onFormSubmit
     * @return {undefined}
     */
    onFormSubmit(event) {
        event.preventDefault();
        //Need to fetch weather data.
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
    /**
     * Render method. Renders the layout of the SearchBar component.
     *
     * @event render
     * @return {HTML}
     */
    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five day forecast in your favorite cities!"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}
/**
 * matchDispatchToProps method that returns a bound action creator to the props.
 * Calling this.props.fetchWeather will fetch the 5 days forecast for the appropriate city queried.
 *
 * @event matchDispatchToProps
 * @return {fetchWeather}
 */
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchWeather: fetchWeather
    }, dispatch)
}
export default connect(null, matchDispatchToProps)(SearchBar);
import React, { Component } from 'react';

/**
 * SeachBar container component. Handles user search terms via inputs
 * @class Component.SearchBar
 * @extends React.Component
 */
export default class SearchBar extends Component {
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
import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherRequest } from './controller/actions';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Get the Weather</h1>
                <button onClick={() => this.props.setWeather("Miami")}>Get Weather</button>
                <h2>number: {this.props?.weather?.main?.temp}</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("number mapstatetoprops ", state.homeReducer.weather)
    return {
        weather: state.homeReducer.weather
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setWeather: (weather) => {
            dispatch(fetchWeatherRequest(weather))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

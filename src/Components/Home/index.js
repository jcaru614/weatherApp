import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherRequest } from './controller/actions';
import mountains from '../../images/mountains.jpg';
import "./styles.css";
console.log('MOUNTAIN ', mountains)
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    handleChange = (e) => {
        this.setState({ city: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setWeather(this.state.city)
        this.setState({
            city: ''
        })
    }

    render() {
        return (
            <div>
            
                <form onSubmit={this.handleSubmit}>
                    <h1>Get the Weather</h1>
                    <textarea onChange={this.handleChange} value={this.state.city} />
                    <div>
                        <button className='button'>Get Weather</button>
                    </div>
                </form>
                <h2>number: {this.props?.weather?.main?.temp}</h2>
                <image className='background' src={require(mountains)} alt="mountains" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("mapstatetoprops ", state.homeReducer.weather)
    return {
        weather: state.homeReducer.weather
    }
}

function mapDispatchToProps(dispatch) {
    console.log("mapdispatchtoprops ", dispatch)
    return {
        setWeather: (city) => {
            dispatch(fetchWeatherRequest(city))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

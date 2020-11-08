import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherRequest } from './controller/actions';
import "./styles.css";

interface HomeComponentState {
    city: string
}

interface HomeComponentProps {
    weather: {
        main: {
            temp: Number
        }
    }
    setWeather: Function
}

class Home extends Component<HomeComponentProps, HomeComponentState> {
    constructor(props:any) {
        super(props);
        this.state = {
            city: ''
        }
    }

    handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>):void => {
        this.setState({ city: e.target.value })
    }

    handleSubmit = (e: React.SyntheticEvent):void => {
        e.preventDefault()
        this.props.setWeather(this.state.city)
        this.setState({
            city: ''
        })
    }

    public render() {
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
            </div>
        )
    }
}

function mapStateToProps(state:any) {
    console.log("mapstatetoprops ", state.homeReducer.weather)
    return {
        weather: state.homeReducer.weather
    }
}

function mapDispatchToProps(dispatch:any) {
    console.log("mapdispatchtoprops ", dispatch)
    return {
        setWeather: (city:string) => {
            dispatch(fetchWeatherRequest(city))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

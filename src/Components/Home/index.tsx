import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherRequest } from './controller/actions';
import "./styles.css";
import wind from '../../images/wind.png'
import sun from '../../images/sun.png'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Box from '@material-ui/core/Box';
import { MyButton, MyTextField } from './styles';


interface HomeComponentState {
    city: string
}

interface HomeComponentProps {
    weather: {
        name: string,
        main: {
            temp: Number
        }
    }
    setWeather: Function
}

class Home extends Component<HomeComponentProps, HomeComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            city: ''
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        this.setState({ city: e.target.value })
    }

    handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault()
        this.props.setWeather(this.state.city)
        this.setState({
            city: ''
        })
    }

    kelvToFahr = () => {
        let cityName = this.props?.weather?.name;
        let kelvins: any = this.props?.weather?.main?.temp;
        if (kelvins) {
            let fahrenheit: number = Math.round((kelvins - 273.15) * 9 / 5 + 32)
            if (fahrenheit >= 72) {
                return (
                    <span className="temp">
                        <h1>{"The Temperature in " + cityName + " is " + fahrenheit + "°F"}</h1>
                        <img className="sun" src={sun} alt="sun" />
                    </span>
                )
            } else {
                return (
                    <span className="temp">
                        <h1>{"The Temperature in " + cityName + " is " + fahrenheit + "°F"}</h1>
                        <img className="wind" src={wind} alt="wind" />
                    </span>
                )
            }
        }
    }

    public render() {
        return (
            <div className="home">
                <div className="innerHome">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Get the Weather</h1>
                        <MyTextField placeholder="Type a city here" id="standard-basic"
                            onChange={this.handleChange} value={this.state.city} />
                        <Box my={2} >
                            <MyButton type="submit" startIcon={<FlashOnIcon />} >
                                Get the Weather
                                </MyButton>
                        </Box>
                    </form>
                    <h2>{this?.kelvToFahr()}</h2>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    console.log("mapstatetoprops ", state.homeReducer.weather)
    return {
        weather: state.homeReducer.weather
    }
}

function mapDispatchToProps(dispatch: any) {
    console.log("mapdispatchtoprops ", dispatch)
    return {
        setWeather: (city: string) => {
            dispatch(fetchWeatherRequest(city))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

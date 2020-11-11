import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./styles.css";
import { fetchWeatherRequest } from '../controller/actions';
import LocationAccess from '../locate/index';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Box from '@material-ui/core/Box';
import { MyButton, MyTextField } from './styles';
import sun from '../../images/sun.png';
import wind from '../../images/wind.png';


interface HomeComponentState {
    city: string,
    latitude: number,
    longitude: number
}

interface HomeComponentProps {
    temp: number,
    name: string,
    description: string,
    setWeather: Function
}

class Current extends Component<HomeComponentProps, HomeComponentState> {
    constructor(props: HomeComponentProps) {
        super(props);
        this.state = {
            city: '',
            latitude: 0,
            longitude: 0
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position:any) => {
            console.log("position ", position.coords);
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
            console.log("state ", this.state);
        })
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
        let description = this.props?.description;
        let cityName = this.props?.name;
        let kelvins: any = this.props?.temp;
        if (kelvins) {
            let fahrenheit: number = Math.round((kelvins - 273.15) * 9 / 5 + 32)
            if (fahrenheit >= 72) {
                return (
                    <span className="temp">
                        <h1>{`The Temperature in ${cityName} is ${fahrenheit}°F with ${description}`}</h1>
                        <img className="temp" src={sun} alt="sun" />
                    </span>
                )
            } else {
                return (
                    <span className="temp">
                        <h1>{`The Temperature in ${cityName} is ${fahrenheit} °F with ${description}`}</h1>
                        <img className="temp" src={wind} alt="wind" />
                    </span>
                )
            }
        }
    }

    public render() {
        return (
            <div className="home">
                <div className="innerHome">
                <LocationAccess latitude={this.state?.latitude} longitude={this.state?.longitude} />
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
                    {this?.kelvToFahr()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    console.log("mapstatetoprops ", state.homeReducer)
    return {
        temp: state.homeReducer.temp,
        name: state.homeReducer.name,
        description: state.homeReducer.description
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

export default connect(mapStateToProps, mapDispatchToProps)(Current);

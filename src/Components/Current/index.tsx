import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherRequest } from '../controller/actions';
import LocationAccess from '../Locate/index';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Box from '@material-ui/core/Box';
import { styles } from './styles';
import { MyButton, MyTextField } from '../Reusable/Material'
import sun from '../../images/sun.png';
import wind from '../../images/wind.png';
import MainView from '../Reusable/MainView';


interface IHomeProps {
    temp: number,
    name: string,
    description: string,
    setWeather: Function
}

interface IHomeState {
    city: string,
    latitude: number,
    longitude: number
}

class Current extends Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            city: '',
            latitude: 0,
            longitude: 0
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position:any) => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
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
    converter = (kelvins: number) => {
    return Math.round((kelvins - 273.15) * 9 / 5 + 32)
    }

    kelvToFahr = () => {
        let { description, name, temp } = this.props
        let kelvins: any = temp;
        if (kelvins) {
            let fahrenheit: number = this.converter(kelvins)
            if (fahrenheit >= 72) {
                return (
                    <span>
                        <h1>{`The Temperature in ${name} is ${fahrenheit}°F with ${description}`}</h1>
                        <img style={styles.temp} src={sun} alt="sun" />
                    </span>
                )
            } else {
                return (
                    <span>
                        <h1>{`The Temperature in ${name} is ${fahrenheit} °F with ${description}`}</h1>
                        <img style={styles.temp} src={wind} alt="wind" />
                    </span>
                )
            }
        }
    }

    public render() {
        return (
            <MainView>
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
            </MainView>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        temp: state.reducer.temp,
        name: state.reducer.name,
        description: state.reducer.description
    };
};

function mapDispatchToProps(dispatch: any) {
    return {
        setWeather: (city: string) => {
            dispatch(fetchWeatherRequest(city))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Current);

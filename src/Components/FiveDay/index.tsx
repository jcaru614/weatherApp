import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainView from '../Reusable/MainView';
import { MyButton, MyTextField } from '../Reusable/Material'
import Box from '@material-ui/core/Box';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { fetchfiveDay } from '../controller/actions';

export interface IfiveDayProps {
    setWeather: Function,
    list: [
        main: {
            temp: any
        },
        dt_txt: any
    ]
}

export interface IfiveDayState {
    city: string,
}

class fiveDay extends Component<IfiveDayProps, IfiveDayState> {
    constructor(props: IfiveDayProps) {
        super(props);
        this.state = {
            city: '',
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

    showWeather = () => {
        let { list } = this.props
        if (list && list.length > 0) {
            console.log("list ", list)
            return list.map((el: any, i: any) => (
                <div key={el.dt}>
                    <h1>{el.main.temp}</h1>
                    <h3>{el.dt_txt}</h3>
                </div>
            ))
        }
    }

    public render() {
        return (
            <MainView>
                <form onSubmit={this.handleSubmit}>
                    <h1>Get a five day forecast</h1>
                    <MyTextField placeholder="Type a city here" id="standard-basic"
                        onChange={this.handleChange} value={this.state.city} />
                    <Box my={2} >
                        <MyButton type="submit" startIcon={<FlashOnIcon />} >
                            Get the Weather
                        </MyButton>
                    </Box>
                </form>
                {this?.showWeather()}
            </MainView>
        );
    }
}

function mapStateToProps(state: any) {
    console.log('matstatetoprops ', state)
    return {
        list: state.reducer.list
    }
};

function mapDispatchToProps(dispatch: any) {
    return {
        setWeather: (city: string) => {
            dispatch(fetchfiveDay(city))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(fiveDay);

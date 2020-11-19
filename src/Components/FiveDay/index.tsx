import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainView from '../Reusable/MainView';
import { MyButton, MyTextField } from '../Reusable/Material'
import Box from '@material-ui/core/Box';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { fetchfiveDay } from '../controller/actions';
import Card from '../Reusable/Card';

export interface IfiveDayProps {
    setWeather: Function,
    list: [
        main: {
            temp: number
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

    converter = (kelvins:number) => {
        return Math.round((kelvins - 273.15) * 9 / 5 + 32)
        }

    showWeather = () => {
        let { list } = this.props;
        if (list && list.length > 0) {
            let forecast: any = [[], [], [], [], []];
            forecast[0].push(list[0]);
            let index: number = 0;
            // added -1 since we get 6 days of forecast instead of 5
            for (let i = 1; i < list.length-1; i++) {
                let date = Number(list[i].dt_txt.substr(8, 3));
                let lastDate = Number(list[i - 1].dt_txt.substr(8, 3));
                if (date !== lastDate) {
                    index++;
                    forecast[index].push(list[i]);
                } else {
                    forecast[index].push(list[i]);
                }
            }
            return forecast.map((arr: []) => {
                return (
                    <Card forecast={arr} >
                        {arr.map((obj: any) => (
                            <div key={obj.dt}>
                                <p>{this.converter(obj.main.temp)} °F</p>
                            </div>
                        ))}

                    </Card>
                )
            })
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

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
        let { list } = this.props;
        if (list && list.length > 0) {
            let forecast: any = [[], [], [], [], []];
            forecast[0].push(list[0]);
            console.log("forecast 1", forecast);
            let index: number = 0;
            for (let i = 1; i < list.length; i++) {
                console.log("forecast all", forecast);
                let date = Number(list[i].dt_txt.substr(8, 3));
                let lastDate = Number(list[i - 1].dt_txt.substr(8, 3));
                if (date !== lastDate) {
                    index++;
                    console.log("forecast 2", forecast);
                    // forecast[index].push(list[i]);
                } else {
                    console.log("forecast 3", forecast);
                    // forecast[index].push(list[i]);
                }
            }
            // for (let j = 0; j < forecast.length; j++) {
            //     return forecast[j].map((el: any, i: any) => (
            //         <div key={el.dt}>
            //             {console.log("el ", el)}
            //             <h1>{el.main.temp}</h1>
            //             <h3>{el.dt_txt.substr(0, 10)}</h3>
            //         </div>
            //     ))
            // }

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

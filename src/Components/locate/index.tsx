import React, { Component } from 'react'
import { MyButton } from './styles';
import { connect } from 'react-redux';
import { fetchWeatherCoor } from '../controller/actions';

export interface ILocationProps {
    latitude: number,
    longitude: number,
    setWeatherCoor: Function,
}

export interface ILocationState {
}

class Location extends Component<ILocationProps, ILocationState> {
  constructor(props: ILocationProps) {
    super(props);
  }
  
  handleClick = () => {
    this.props.setWeatherCoor(this.props.latitude, this.props.longitude)
  }

  public render() {
    return (
      <div className="btn">
    <MyButton onClick={this.handleClick}>Quick Weather</MyButton>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      setWeatherCoor: (latitude: number, longitude: number) => {
          dispatch(fetchWeatherCoor(latitude, longitude))
      }
  };
};

export default connect(null, mapDispatchToProps)(Location);
import * as React from 'react';
import './styles.css';
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

class Location extends React.Component<ILocationProps, ILocationState> {
  constructor(props: ILocationProps) {
    super(props);

    this.state = {
    }
    console.log('PROPS ', this.props)
  }
  
  handleClick = () => {
    this.props.setWeatherCoor(this.props.latitude, this.props.longitude)
  }

  public render() {
    return (
      <div className="btn">
  
    <MyButton onClick={this.handleClick}>Click Me</MyButton>
      </div>
    );
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
      setWeatherCoor: (latitude: number, longitude: number) => {
          dispatch(fetchWeatherCoor(latitude, longitude))
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
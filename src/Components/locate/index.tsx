import * as React from 'react';

export interface ILocationProps {
    lat: number,
    long: number
}

export interface ILocationState {
}

export default class Location extends React.Component<ILocationProps, ILocationState> {
  constructor(props: ILocationProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <h1>click me</h1>
    {/* <p>{this.props.lat}</p>
    <p>{this.props.long}</p> */}
      </div>
    );
  }
}

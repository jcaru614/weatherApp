import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { setHomeRequest } from './controller/actions';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <button onClick={() => this.props.setNumber(59)}>Add number</button>
                <h2>number? : {this.props?.number}</h2>
            </div>
        )
    }

}

function mapStateToProps(state) {
    console.log("number mapstatetoprops ", state.homeReducer.number)
    return {
        number: state.homeReducer.number
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setNumber: (number) => {
            dispatch(setHomeRequest(number))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

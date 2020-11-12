import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainView from '../Reusable/MainView';

export interface IfiveDayProps {
}

export interface IfiveDayState {
}

class fiveDay extends Component<IfiveDayProps, IfiveDayState> {
    constructor(props: IfiveDayProps) {
        super(props);
        this.state = {
        }
    }

    public render() {
        return (
            <MainView>
            </MainView>
        );
    }
}

function mapStateToProps(state: any) {
    return {
    }
};

function mapDispatchToProps(dispatch: any) {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(fiveDay);

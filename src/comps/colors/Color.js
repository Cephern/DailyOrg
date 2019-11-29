import React, { Component } from 'react';
import CHeader from './CHeader';
import CMain from './CMain';

export default class Color extends Component {
    state = {
    }

    render() {
        return (
            <div style={appStyle}>
                <CHeader />
                <CMain />
            </div>
        )
    }
}

let appStyle = {
    padding: '2em'
}
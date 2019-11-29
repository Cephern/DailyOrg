import React, { Component } from 'react'

export default class CMain extends Component {
    state = {
        color: null
    }

    randomColor = () => {
        return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }

    handleClick = () => {
        let color = this.randomColor();
        this.setState({
            color
        });
    }


    render() {
        let cubeStyle = {
            width: '160px',
            height: '160px',
            backgroundColor: this.state.color === null ? this.randomColor() : this.state.color
        }

        return (
            <div>
                <h2>Предлагаю...</h2>
                <div style={cubeStyle}></div>
                <div>ColorName_ {cubeStyle.backgroundColor}</div>
                <button onClick={this.handleClick}>Давай еще разик..</button>
            </div>
        )
    }
}
import React, { Component } from 'react';

export default class Budget extends Component {
    state = {
        budget: null
    }

    handleChange = (e) => {
        this.setState({
            budget: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBudget(this.state.budget);
        document.querySelector('#budget').value = null;
    }

    render() {
        return (
            <div style={budgetStyle} >
                <form style={formStyle} onSubmit={this.handleSubmit} >
                    <label htmlFor="budget">Set Budget: </label>
                    <input style={inputStyle} type="text" name="budget" id="budget" onChange={this.handleChange} />
                </form>
                <h2>Budget: {this.props.budget}</h2>
            </div>
        )
    }
}

let budgetStyle = {
    background: '#ddd',
    textAlign: 'center',
    padding: '0.5em',
    fontSize: '1.2em',
    borderRadius: '15px',
    boxShadow: '5px 5px 8px #000'
}

let formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '0.5em'
}

let inputStyle = {
    marginLeft: '5px',
    borderRadius: '10px'
}
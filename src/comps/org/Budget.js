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
            <div className="budget">
                <form className="budget_form" onSubmit={this.handleSubmit} >
                    <label htmlFor="budget">Set Budget: </label>
                    <input type="text" name="budget" id="budget" onChange={this.handleChange} />
                </form>
                <h2 className="budget_h2">Budget: {this.props.budget}</h2>
            </div>
        )
    }
}
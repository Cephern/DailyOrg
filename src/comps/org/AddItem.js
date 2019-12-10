import React, { Component } from 'react';

export default class AddItem extends Component {
    state = {
        name: null,
        cost: null,
        count: 1,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name: null,
            cost: null
        })
        document.querySelector('#name').value = null;
        document.querySelector('#cost').value = null;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <form className="addItem_form" onSubmit={this.handleSubmit}>
                <h2>Add Item</h2>
                <div className="addItem_inputs">
                    <label htmlFor="name">Name:</label>
                    <input onChange={this.handleChange} type="text" name="name" id="name" />
                    <label htmlFor="cost">Cost:</label>
                    <input onChange={this.handleChange} type="number" name="cost" id="cost" />
                </div>
                <button>Submit</button>
            </form>
        );
    }
}
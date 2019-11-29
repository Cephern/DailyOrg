import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        name: null,
        cost: null,
        count: null,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name: null,
            cost: null,
            count: null
        })
        document.querySelector('#name').value = null;
        document.querySelector('#cost').value = null;
        document.querySelector('#count').value = null;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <form style={formStyle} onSubmit={this.handleSubmit}>
                <h2>Add Item</h2>
                <label htmlFor="name">Name:</label>
                <input style={inputStyle} onChange={this.handleChange} type="text" name="name" id="name" />
                <label htmlFor="cost">Cost:</label>
                <input style={inputStyle} onChange={this.handleChange} type="number" name="cost" id="cost" />
                <label htmlFor="count">Count:</label>
                <input style={inputStyle} onChange={this.handleChange} type="number" name="count" id="count" />
                <button style={btnStyle} >Submit</button>
            </form>
        );
    }
}

let formStyle = {
    background: '#ccc',
    boxShadow: '5px 5px 8px #000',
    padding: '0.5em',
    margin: '10px 0',
    borderRadius: '15px',
    textAlign: 'center',
    fontSize: '1.2em'
}

let inputStyle = {
    margin: '0 5px',
    borderRadius: '10px'
}

let btnStyle = {
    display: 'block',
    width: '40%',
    margin: '1em auto',
    padding: '0.5em',
    borderRadius: '10px',
    outline: 'none'
}

export default AddItem;
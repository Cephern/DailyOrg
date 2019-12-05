import React, { Component } from 'react';
import Display from './Display';
import Budget from './Budget';
import TotalCount from './TotalCount';
import AddItem from './AddItem';

export default class Org extends Component {
    state = {
        items: JSON.parse(localStorage.getItem('items')) || [],
        budget: JSON.parse(localStorage.getItem('budget')) || null
    }

    addItem = (item) => {
        let id = Math.random();
        item.id = id;
        let items = [...this.state.items, item];
        this.setState({ items });
        localStorage.setItem('items', JSON.stringify(items));
    }

    deleteItem = (id) => {
        let filteredItems = [...this.state.items].filter(item => item.id !== id);
        this.setState({ items: filteredItems });
        localStorage.setItem('items', JSON.stringify(filteredItems));
    }

    addBudget = (budget) => {
        this.setState({
            budget: budget
        });
        localStorage.setItem('budget', JSON.stringify(budget));
    }

    increment = (id) => {
        this.setState({
            items: [...this.state.items.map(item => {
                if (item.id === id) {
                    item.count++;
                }

                return item;
            })]
        });
    }

    decrement = (id) => {
        let check = [...this.state.items.filter(item => item.id === id)];
        if (check[0].count > 1) {
            this.setState({
                items: [...this.state.items.map(item => {
                    if (item.id === id) {
                        item.count--
                    }
                    return item;
                })]
            });
        } else {
            this.setState({
                items: [...this.state.items.filter(item => item.id !== id)]
            });
        }

    }

    render() {
        return (
            <div className="org">
                <Budget budget={this.state.budget} addBudget={this.addBudget} />
                <AddItem addItem={this.addItem} />
                <TotalCount items={this.state.items} />
                <Display items={this.state.items} deleteItem={this.deleteItem} increment={this.increment} decrement={this.decrement} />
            </div>
        );
    }
}
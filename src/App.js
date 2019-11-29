import React, { Component } from 'react';
import Display from './comps/Display';
import Budget from './comps/Budget';
import TotalCount from './comps/TotalCount';
import AddItem from './comps/AddItem';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'mjolk', cost: 1, count: 2 },
      { id: 2, name: 'apple', cost: 3, count: 2 },
      { id: 3, name: 'knott', cost: 1, count: 3 }
    ],
    budget: null
  }

  addItem = (item) => {
    let id = Math.random();
    item.id = id;
    let items = [...this.state.items, item];
    this.setState({ items });
  }

  deleteItem = (id) => {
    let filteredItems = [...this.state.items].filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  }

  addBudget = (budget) => {
    this.setState({
      budget: budget
    })
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
      <div style={appStyle} className="App">
        <Budget budget={this.state.budget} addBudget={this.addBudget} />
        <AddItem addItem={this.addItem} />
        <TotalCount items={this.state.items} />
        <Display items={this.state.items} deleteItem={this.deleteItem} increment={this.increment} decrement={this.decrement} />
      </div>
    );
  }
}

let appStyle = {
  padding: '2em'
}

export default App;

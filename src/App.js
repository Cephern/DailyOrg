import React, { Component } from 'react';

import Org from './comps/org/Org';

import "./index.css";

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <header className="app_header">Jag Org</header>
        <Org />
      </div>
    )
  }
}
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './comps/Navbar'
import Org from './comps/org/Org';
import Color from './comps/colors/Color';

import "./index.css";

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header className="app_header">Let'See</header>
          <Navbar />
          <Route exact path='/' component={Org} />
          <Route path='/colorPicker' component={Color} />
        </div>
      </BrowserRouter>
    )
  }
}
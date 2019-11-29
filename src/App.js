import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './comps/Navbar'
import Org from './comps/org/Org';
import Color from './comps/colors/Color';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App" style={appStyle}>
          <header style={headerStyle}>Let'See</header>
          <Navbar />
          <Route exact path='/' component={Org} />
          <Route path='/colorPicker' component={Color} />
        </div>
      </BrowserRouter>
    )
  }
}

let headerStyle = {
  fontSize: '1.5em',
  fontWeight: '600',
  textAlign: 'center'
}

let appStyle = {
  width: '450px'
}

export default App;

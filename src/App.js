import React from 'react';
import "./index.css";
import OrgContextProvider from './contexts/OrgContext';

import Budget from './comps/Budget';
import Display from './comps/Display';
import TotalCount from './comps/TotalCount';

const App = () => {
  return (
    <div className="app">
      <header className="app_header">Jag Org</header>
      <OrgContextProvider>
        <Budget />
        <TotalCount />
        <Display />
      </OrgContextProvider>
    </div>
  )
}

export default App;
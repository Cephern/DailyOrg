import React from 'react';
import "./index.css";
import OrgContextProvider from './contexts/OrgContext';
import MainComponent from './comps/MainComponent';

const App = () => {
  return (
    <div className="app">
      <header className="app_header">Jag Org</header>
      <OrgContextProvider>
        <MainComponent />
      </OrgContextProvider>
    </div>
  )
}

export default App;
import React from 'react';
import "./index.css";
import MainComponent from './comps/MainComponent';
import OrgContextProvider from './contexts/OrgContext';
import DatalistContextProvider from './contexts/DatalistContext';

const App = () => {
  return (
    <div className="app">
      <header className="app_header">Jag Köper</header>
      <OrgContextProvider>
        <DatalistContextProvider>
          <MainComponent />
        </DatalistContextProvider>
      </OrgContextProvider>
    </div>
  )
}

export default App;
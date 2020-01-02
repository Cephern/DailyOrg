import React from 'react';
import "./index.css";
import MainComponent from './comps/MainComponent';
import OrgContextProvider from './contexts/OrgContext';


const App = () => {
  return (
    <div className="app">
      <header className="app_header">Jag Köper</header>
      <OrgContextProvider>
        <MainComponent />
      </OrgContextProvider>
    </div>
  )
}

export default App;
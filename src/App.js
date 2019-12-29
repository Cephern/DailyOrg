import React from 'react';
import "./index.css";
import MainComponent from './comps/MainComponent';
import OrgContextProvider from './contexts/OrgContext';
import AutoCompleteContextProvider from './contexts/AutoCompleteContext';


const App = () => {
  return (
    <div className="app">
      <header className="app_header">Jag Köper</header>
      <OrgContextProvider>
        <AutoCompleteContextProvider>
          <MainComponent />
        </AutoCompleteContextProvider>
      </OrgContextProvider>
    </div>
  )
}

export default App;
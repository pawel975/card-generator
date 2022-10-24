import React from 'react';
import AddElementPanel from '../AddElementPanel/AddElementPanel';
import Card from '../card/Card';
import CustomizationPanel from '../CustomizationPanel/CustomizationPanel';
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <h1>Example text</h1>
      <CustomizationPanel />
      <Card />
      <AddElementPanel />
    </div>
  );
}

export default App;

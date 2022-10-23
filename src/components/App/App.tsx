import React from 'react';
import AddElementPanel from '../AddElementPanel/AddElementPanel';
import Card from '../card/Card';
import CustomizationPanel from '../CustomizationPanel/CustomizationPanel';


const App = () => {
  return (
    <div className="app">
      <CustomizationPanel />
      <Card />
      <AddElementPanel />
    </div>
  );
}

export default App;

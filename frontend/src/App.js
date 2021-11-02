import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'
import Layout from 'features/common/layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const App= () => {
  return (
    <div className="App">
     <BrowserRouter><Layout/></BrowserRouter>
    </div>
  );
}

export default App;
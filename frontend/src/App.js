import 'bulma/css/bulma.css'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from 'pages/Landing';
import Navbar from 'components/Navbar';
import React from 'react';

function App() {

  return (
    <>
      <Navbar />
      
      <div className="has-background-light app">
        <Router>
          <Route path='/' component={Landing} />
        </Router>
      </div>
    </>
  );
}

export default App;

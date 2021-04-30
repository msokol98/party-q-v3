import 'bulma/css/bulma.css'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from 'pages/Landing';
import Navbar from 'components/Navbar';
import Party from 'pages/Party';
import React from 'react';

function App() {

  return (
    <>
      <Navbar />
      
      <div className="has-background-dark app">
        <Router>
          <Route path='/' component={Landing} exact={true} />
          <Route path='/party' component={Party} exact={true} />
        </Router>
      </div>
    </>
  );
}

export default App;

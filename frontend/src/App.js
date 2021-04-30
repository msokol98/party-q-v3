import 'bulma/css/bulma.css'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from 'pages/Landing';
import React from 'react';

function App() {

  return (
    <Router>
      <Route path='/' component={Landing} />
    </Router>
  );
}

export default App;

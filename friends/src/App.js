import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Welcome to Friends</h1>

      <Route path="/login" component={Login} />
    </div>
    </Router>
  );
}

export default App;

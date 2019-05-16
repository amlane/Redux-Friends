import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/HomePage';

import './styles/App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/login">Log In</Link>
      </nav>

      <Route path='/' component={Home} />
      <Route exact path="/login" component={Login} />
    </div>
    </Router>
  );
}

export default App;

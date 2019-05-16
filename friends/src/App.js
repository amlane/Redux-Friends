import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import Home from './components/HomePage';
import FriendsPage from './components/FriendsPage';

import './styles/App.css';

function App() {

  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/protected">Friends</Link>{' '}
        <Link to="/login">Log In</Link>{' '}
        <Link to="/" onClick={logOut}>Log Out</Link>
      </nav>

      <Route path='/' component={Home} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={FriendsPage} />
    </div>
    </Router>
  );
}

function logOut() {
  localStorage.removeItem('token')
}

export default App;

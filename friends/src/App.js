import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import Home from './components/HomePage';
import FriendsPage from './components/FriendsPage';

import './styles/App.css';

function App() {

  return (
    <Router>
    <div className="App">
      <nav className="navigation-bar">
        <div className="nav-links"> 
        <NavLink exact to="/">Home</NavLink>{' '}
        <NavLink to="/friends">Friends</NavLink>{' '}
        </div>
        <div>
        <Link to="/login">Log In</Link>{' '}
        <Link to="/" onClick={logOut}>Log Out</Link>
        </div>
      </nav>

      <Route exact path='/' component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={FriendsPage} />
    </div>
    </Router>
  );
}

function logOut() {
  localStorage.removeItem('token')
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import Home from './components/HomePage';
import FriendsPage from './components/FriendsPage';
import AddFriendForm from './components/AddFriendForm';

// import { logout } from './actions';

import './styles/App.css';

class App extends React.Component{

  render(){
    return (
      <Router>
      <div className="App">
        <nav className="navigation-bar">
          <div className="nav-links"> 
          <NavLink exact to="/">Home</NavLink>
          {this.props.isLoggedIn && (
            <>
              <NavLink exact to="/friends">Friends List</NavLink>
              <NavLink to="/friends/form">Add Friend</NavLink>
            </>
          )}
          </div>
          <div>
            {!this.props.isLoggedIn ? (
               <Link to="/login">Log In</Link>
            ) : <Link to="/" onClick={logout}>Log Out</Link> 
            }
          </div>
        </nav>

        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friends/form" component={AddFriendForm} />
        <PrivateRoute path="/friends" component={FriendsPage} />
      </div>
      </Router>
    );
  }
}

function logout() {
  localStorage.removeItem('token')
    window.location.reload(true);
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {} )(App);

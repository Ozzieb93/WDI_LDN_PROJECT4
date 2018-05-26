import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {


  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">

        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <p> 🏚 </p>
          </Link>
          <a role="button" className="navbar-burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/login" className="navbar-item">Login</Link>
            <Link to="/register" className="navbar-item">Register</Link>
            {/* {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>} */}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);

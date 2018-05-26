import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {


  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" width="30" />
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

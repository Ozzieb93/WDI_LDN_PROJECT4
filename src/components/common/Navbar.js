import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  state = {
    navIsOpen: false
  }

handleToggle = () => {
  this.setState({ navIsOpen: !this.state.navIsOpen });
}
componentWillUpdate() {
  this.state.navIsOpen && this.setState({ navIsOpen: false });
}

render() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="https://pngimg.com/uploads/house/house_PNG63.png"/>
          {/* <p> 🏚 </p> */}
        </Link>
        <a role="button" className={`navbar-burger ${this.state.navIsOpen? 'is-active' : ''}`} onClick={this.handleToggle}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link to="/" className="navbar-item">🏚</Link>
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

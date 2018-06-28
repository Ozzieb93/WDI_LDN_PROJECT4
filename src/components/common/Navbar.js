import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';
import axios from 'axios';


class Navbar extends React.Component {

  state = {
    navIsOpen: false,
    user: {}
  }

handleToggle = () => {
  this.setState({ navIsOpen: !this.state.navIsOpen });
}

componentWillUpdate() {
  this.state.navIsOpen && this.setState({ navIsOpen: false });
}

componentDidMount() {
  Auth.isAuthenticated() && axios.get(`/api/users/${Auth.getPayload().sub}`)
    .then(res => this.setState({ user: res.data }, () => {
      console.log('this is the state ->', this.state);
    }));
}


handleLogout = () => {
  Auth.logout();
  this.setState({ user: {} });
  this.props.history.push('/');
}

render() {
  console.log(this.state.user);
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand ">
        <Link className="navbar-item" to="/">
          <img src="/assets/logo.png"/>
          {/* <p> 🏚 </p> */}
        </Link>
        <a role="button" className={`navbar-burger ${this.state.navIsOpen? 'is-active' : ''}`} onClick={this.handleToggle}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
          {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
          {(this.state.user.role === 'Landlord' ) &&
          Auth.isAuthenticated() && <Link to={'/properties'} className="navbar-item">{this.state.user.name}'s Properties</Link>}
          {Auth.isAuthenticated() && <Link to={`/users/${this.state.user._id}`} className="navbar-item">{this.state.user.name}'s Profile</Link>}
          {/* Making an axios request would not refresh the navbar. This is why the navbar doesnt update with the name of the current user untill after a refresh */}
        </div>
        <div className="navbar-end">
          {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
        </div>
      </div>
    </nav>
  );
}
}

export default withRouter(Navbar);

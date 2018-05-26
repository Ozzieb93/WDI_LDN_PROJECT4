import React from 'react';
import axios from 'axios';
import Auth from '../../lib/auth';

class AuthRegister extends React.Component {
  state = {};

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/register', this.state)
      .then(res => Auth.setToken(res.data.token))
      .then(() => this.props.history.push('/user'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <input
            className="select"
            name="userType"
            placeholder="Tenant or Landlord"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="firstname"
            placeholder="First Name - r"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="surname"
            placeholder="Surname"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="email"
            placeholder="Email - r"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password - r"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            type="password"
            name="passwordConfirmation"
            placeholder="Password Confirmation - r"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="textarea"
            name="description"
            placeholder="About me"
            onChange={this.handleChange}
          />
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default AuthRegister;

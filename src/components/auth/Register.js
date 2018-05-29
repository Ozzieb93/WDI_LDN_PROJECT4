import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

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
      .then(() => this.props.history.push(`/api/users/${Auth.getPayload().sub}`));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <div className="field">
          <input
            className="select"
            name="userType"
            placeholder="Tenant or Landlord"
            onChange={this.handleChange}
          />
        </div> */}
        <div className="field">
          <input
            className="input"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            type="password"
            name="passwordConfirmation"
            placeholder="Password Confirmation"
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
        <div className="field">
          <input
            className="input"
            name="address"
            placeholder="address"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="image"
            placeholder="image"
            onChange={this.handleChange}
          />
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default AuthRegister;

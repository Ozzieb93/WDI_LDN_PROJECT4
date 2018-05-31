import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class NewProperty extends React.Component {
  state = {
    user: {}
  };

  // handleChange = ({ target: { name, value }}) => {
  //   this.setState({ [name]: value });
  // }
  //
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post('/api/properties', this.state)
  //     .then(res => Auth.setToken(res.data.token))
  //     .then(() => this.props.history.push('/'));
  // }
  componentDidMount() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({ user: res.data }, () =>
        console.log(res.data)
      ));
  }

  render() {
    // const {user} = this.user;
    return (
      <div>
        {/* { user &&
          <h1 className="title is-1">New Property Form for {user.name} </h1>
        } */}
        <h1 className="title is-1">Add a new property </h1>

        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              className="input"
              name="address"
              placeholder="Address"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              className="textarea"
              name="description"
              placeholder="Description Of House"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              className="input"
              name="NoOfTenants"
              placeholder="Number of Tenants"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              className="input"
              name="image"
              placeholder="Picture Of House"
              onChange={this.handleChange}
            />
          </div>
          <button className="button is-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewProperty;

import React from 'react';
import UserForm from '../job/Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class UsersEdit extends React.Component {

  state = {
    errors: []
  }

  componentDidMount() {
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState(res.data, () =>
        console.log(res.data)));
  }

  handleChange = ({target: {name, value}}) => {
    const errors = { ...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } =this.props.match.params;
    axios
      .put(`/api/users/${this.props.match.params.id}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push(`/users/${id}`))
      .catch(err => this.setState({ errors: err.response.data.errors}));
  }

  render() {
    if(Object.keys(this.state).length === 0) return null;
    return (
      <div>
        <h1>
        </h1>
      </div>
    );
  }
}

export default UsersEdit;

// Name
// Address
// Description
// Image

//   <UserForm
//   user={this.state}
//   handleChange={this.handleChange}
//   handleSubmit={this.handleSubmit}
//   errors={this.state.errors}
// />;

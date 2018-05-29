import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class TenantProfile extends React.Component {

    state = {
      user: {}
    }

    componentDidMount() {
      axios.get(`/api/users/${Auth.getPayload().sub}`)
        .then(res => this.setState({ user: res.data }));
    }

    render() {
      const { user } = this.state;
      return(
        <div className="columns">
          <div className="column">
            <h1>Profile</h1>
            <div className="hero-image" style={{ backgroundImage: `url(${ user.image })` }} />
          </div>
          <div className="column">
            <h1 className="title is-1">{user.name}</h1>
            <h2 className="subtitle is-2">{user.address}</h2>
            <h3 className="subtitle is-3">{user.bio}</h3>
            <p>{user.bio}</p>
          </div>
        </div>
      );
    }
}

export default TenantProfile;

// Should this be a classical or functional component?

import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

class Profile extends React.Component {

    state = {
      user: {}
    }

    componentDidMount() {
      axios.get(`/api/users/${Auth.getPayload().sub}`)
        .then(res => this.setState({ user: res.data }));
    }

    render() {
      const { user } = this.state;
      // console.log(user);
      return(
        <section>
          <div className="columns">
            <div className="column">
              <h1>Profile</h1>
              <div className="hero-image" style={{ backgroundImage: `url(${ user.image })` }} />
            </div>
            <div className="column">
              <h1 className="title is-1">{user.name}</h1>
              <h2 className="subtitle is-2">{user.address}</h2>
              <p>{user.description}</p>
              <p>{user.bio}</p>
            </div>
          </div>
          <div>
            <Link
              to={'/properties'}
              className="button is-success"
            >Show properties for {user.name}</Link>
          </div>
          <div>
            <Link
              to={`/users/${user._id}/edit`}
              className="button is-success"
            >Edit {user.name} Profile</Link>
          </div>
        </section>
      );
    }
}

export default Profile;

// Should this be a classical or functional component?

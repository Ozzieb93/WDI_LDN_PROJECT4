import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

class Profile extends React.Component {

    state = {
      user: {}
    }

    componentDidMount() {
      axios
        .get(`/api/users/${Auth.getPayload().sub}`)
        .then(res => this.setState({ user: res.data }));
    }

    render() {
      const { user } = this.state;
      // console.log(user);
      return(
        <section>
          <h1 className="title is-2">{user.name}'s Profile</h1>
          <div className="columns">
            <div className="column">
              <div className="hero-image profile-picture" style={{ backgroundImage: `url(${ user.image })` }} />
            </div>
            <div className="column">
              <h1 className="title is-3">{user.name}</h1>
              <h2 className="subtitle is-4">{user.address}</h2>
              <p>{user.description}</p>
              <p>{user.bio}</p>
              <div className="show-property-button">
                {this.state.user.role === 'Landlord' && <Link
                  to={'/properties'}
                  className="button is-success"
                >Show properties for {user.name}</Link>}
                {this.state.user.role === 'Tenant' &&
                <Link
                  to={'/'}
                  className="button is-success"
                >Maintainance Request</Link>}
              </div>
            </div>
          </div>
          <div>
            {/* <Link
              to={`/users/${user._id}/edit`}
              className="button is-success"
            >Edit {user.name} Profile</Link> */}
          </div>
        </section>
      );
    }
}

export default Profile;

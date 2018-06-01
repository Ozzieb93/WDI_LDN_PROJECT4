import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

class PropertyIndex extends  React.Component {

      state = {
        property: [],
        user: []
      }

      componentDidMount() {
        axios.get('/api/properties')
          .then(res => this.setState({ property: res.data }));
        axios.get(`/api/users/${Auth.getPayload().sub}`)
          .then(res => this.setState({ user: res.data }));
      }

      render() {

        const { user } = this.state;
        const { property } = this.state;

        console.log(property);
        return(
          <div>
            <h1 className="title is-1">{user.name}'s Properties </h1>
            <div className="columns">
              <div className="column ">
                <div className="center">
                  <img className="hero-image has-text-centered profile-image" src={user.image} />
                </div>
              </div>
              <div className="column">
                {property.map(property =>
                  <div key={property._id}>
                    <h1 className="subtitle is-3">{property.address}</h1>
                    <div>
                    </div>
                    <Link
                      to={`/property/${property._id}`}
                      className="button is-success is-small"
                    >More details about the property</Link>
                  </div>

                )}
                <div>
                  <Link
                    to={'/properties/new'}
                    className="button is-small is-info"
                  >Add a new property </Link>
                </div>
              </div>
            </div>


          </div>
        );
      }
}

export default PropertyIndex;

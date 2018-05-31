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

        // console.log(user);
        console.log(property);

        return(
          <div>
            <h1 className="title is-1">{user.name}'s Properties </h1>
            <img src={user.image} />
            <div className="columns">
              <ul>
                <div className="column">
                  {property.map(property =>
                    <li key={property._id}> <hr />
                      {property.address}
                    </li>
                  )}
                </div>
              </ul>
              <ul>
                <div className="column">
                  {property.map(property =>
                    <li key={property._id}> <hr />
                      <Link
                        to={`/property/${property._id}`}
                        className="button is-success"
                      >More details about the property</Link>
                    </li>
                  )}
                </div>
              </ul>
            </div>
          </div>
        );
      }
}

export default PropertyIndex;

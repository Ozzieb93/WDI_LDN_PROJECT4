import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class PropertyShow extends  React.Component {

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

        console.log(user);
        console.log('I am here', property);

        return(
          <section>
            <h1 className="title is-1">{user.name}'s Properties </h1>
            <p>{user.image}</p>
            <ul>
              {property.map(property =>
                <li key={property.id}> <hr />
                  {property.address}</li>
              )}
            </ul>
          </section>
        );
      }
}

export default PropertyShow;

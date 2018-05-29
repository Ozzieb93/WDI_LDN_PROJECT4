import React from 'react';

class PropertyShow extends  React.Component {
    state = {}

    render() {
      return(
        <section>
          <div className="columns">
            <div className="column">
              <div className="hero-image" style={{ backgroundImage: `url(${property.image})` }} />
            </div>
            <div className="column">
              <h2>{property.address}</h2>
            </div>
          </div>
          <h1 className="title is-1">Tenants</h1>
          <div className="columns">
            <div className="column">
              <h1 className="title is-1">{user.image}</h1>
            </div>
            <div className="column">
              <h2 className="subtitle is-2">{user.bio}</h2>
            </div>
          </div>
        </section>
      );
    }
}

export default PropertyShow;


// The user being populated will not be the user logged in, but the user
// who is subscirbed to living in the house of the Landlord

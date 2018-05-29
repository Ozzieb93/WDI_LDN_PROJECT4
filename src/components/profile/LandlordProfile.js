import React from 'react';

class LandlordProfile extends  React.Component {
    state = {}

    render() {
      return(
        <div className="columns">
          <div className="column">
            <div className="hero-image" style={{ backgroundImage: `url(${property.image})` }} />
          </div>
          <div className="column">
            <h1 className="title is-1">{user.name}</h1>
            <h2 className="subtitle is-2">{property.address}</h2>
            <h2 className="subtitle is-2">{property.tenants}</h2>
            <p>{user.bio}</p>
            <Link
              to={`/properties/${property._id}`}
              className="button is-success"
            >Show</Link>
          </div>
        </div>
      );
    }
}

export default LandlordProfile;

// Should this be a classical or functional component?

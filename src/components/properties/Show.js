import React from 'react';
import axios from 'axios';
// import Auth from '../../lib/Auth';
// import { Link } from 'react-router-dom';

class Show extends React.Component {

    state = {
      property: {}
    }

    componentDidMount() {
      axios.get(`/api/properties/${this.props.match.params.id}`)
        .then(res => this.setState({ property: res.data }));
    }

    render() {
      const { property } = this.state;
      console.log(property.tenants);
      return(
        <section>
          <h1 className="title is-1">{property.address}</h1>
          {/* <div className="columns"> */}
          <div className="column">
            <div className="hero-image" style={{ backgroundImage: `url(${ property.image })` }} />
          </div>
          {property.tenants &&
            <div>
              <h5 className="subtitle is-5">Number of Tenants currently living at the property: {property.tenants.length}</h5>
              <div className="columns">
                <div className="column">
                  <img src={property.tenants[0].image}/>
                </div>
                <div className="column">
                  <h1 className="title is-1">{property.tenants[0].name}</h1>
                </div>
                <div className="column">
                  <h1 className="title is-1">{property.tenants[0].flat}</h1>
                </div>
                <div className="column">
                  <h1 className="title is-1">{property.tenants[0].proffesion}</h1>
                </div>
              </div>
            </div>
          }
          {/* </div> */}
          {/* <div>
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
          </div> */}
        </section>
      );
    }
}

export default Show;

import React from 'react';
import axios from 'axios';
// import Auth from '../../lib/Auth';
// import { Link } from 'react-router-dom';
import Map from '../common/Map';

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
      // console.log(property.location);
      return(
        <div>
          <h1 className="has-text-centered title is-1">{property.address}</h1>
          <div className="columns">
            <div className="column is-half">
              <div className="hero-image" style={{ backgroundImage: `url(${ property.image })` }} />
            </div>
            <div className="column is-half">
              {property.location &&
                <Map className="show-map" center={property.location}/>
              }
              <div>
              </div>
            </div>
          </div>
          {property.tenants &&
            <div>
              <h5 className="has-text-centered subtitle is-5">Number of Tenants currently living at the property: {property.tenants.length}</h5>
              {property.tenants.map(tenant =>
                <div className="card card-show" key={tenant._id}>
                  <div className="columns is-flex">
                    <div className="column has-text-centered tenant-image">
                      <img className="level-item user-image" src={tenant.image}/>
                    </div>
                    <div className="column">
                      <p className="title is-3">{tenant.name}</p>
                      <p className="subtitle flat-occupies is-6">George Occupies flat {tenant.flat}</p>
                      <p id="prof" className="proff subtitle is-5">{tenant.name}</p>
                      <p className="fa fa-envelope-o"></p>
                    </div>
                    <div className="column">
                      <h1 className="has-text-centered subtitle is-4">{tenant.movedIn}</h1>
                    </div>
                  </div>
                </div>
              )}
            </div>
          }
        </div>
      );
    }
}

export default Show;
//
{/* <div className="columns">




</div> */}

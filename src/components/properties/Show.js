import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
// import { Link } from 'react-router-dom';
import Map from '../common/Map';

class Show extends React.Component {

    state = {
      property: {},
      users: {}
    }

    componentDidMount() {
      // console.log(this.props.match.params.id);
      // console.log(this.props);
      axios
        .get(`/api/properties/${this.props.match.params.id}`)
        .then(res => this.setState({ property: res.data }));
      axios
        .get('/api/users/')
        .then(res => this.setState({ users: res.data }));
    }

    handleTenantDelete = tenant => {
      console.log('Delete', this.users);
      axios
        .delete(`/api/users/${tenant._id}`, {
          headers: { Authorization: `Bearer ${Auth.getToken()}`}
        })
        .then(() => this.props.history.push('/'));
    }


    render() {
      const { property } = this.state;
      // console.log(property.tenants);
      // console.log(property.location);
      const { user } = this.state;
      console.log(user);
      return(
        <div>
          <h1 className="has-text-centered title is-1">{property.address}</h1>
          <div className="columns">
            <div className="column is-half">
              <div className="hero-image property-show-image" style={{ backgroundImage: `url(${ property.image })` }} />
            </div>
            <div className="column is-half">
              {property.location &&
                <Map className="show-map" center={property.location}/>
              }
            </div>
          </div>
          {property.tenants &&
            <div>
              <h5 className="has-text-centered subtitle is-5">Number of Tenants currently living at the property: {property.tenants.length}</h5>
              {property.tenants.map(tenant =>
                <div className="card card-show" key={tenant._id}>
                  <div className="columns is-flex">
                    <div className="column has-text-centered tenant-image">
                      <img className="hero-image level-item user-image" src={tenant.image}/>
                    </div>
                    <div className="column">
                      <p className="title is-3">{tenant.name}</p>
                      <p className="subtitle flat-occupies is-6">{tenant.name} Occupies flat {tenant.flat}</p>
                      <p id="prof" className="proff subtitle is-5">{tenant.proffession}</p>
                      <div>
                        <p className="fa fa-envelope-o "></p>
                        <p className="fa fa-phone-square "></p>
                      </div>
                    </div>
                    <div  className="column ">
                      <h1 className="has-text-centered subtitle is-4">Date Moved In</h1>
                      <h1 className="has-text-centered subtitle is-6">{tenant.movedIn}</h1>
                      <div id="columns">
                        <div id="column level">
                          <button id="show-page-tenant" className="button is-small show-page-tenant is-success">Show {tenant.name}</button>
                          <button onClick={() => this.handleTenantDelete(tenant)} className="button is-small  is-danger show-page-tenant">Remove {tenant.name}</button>
                        </div>
                      </div>
                      <p></p>
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

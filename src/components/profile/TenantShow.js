import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class TenantProfile extends React.Component {

    state = {
      user: {}
    }

    componentDidMount() {
      axios.get(`/api/properties/${this.props.match.params.id}`)
        .then(res => this.setState({ property: res.data }));
    }


    render() {
      const { property } = this.state;
      console.log(property.tenants);
      return(
        // <section>
        //   <div className="columns">
        //     <div className="column">
        //       <h1>Profile</h1>
        //       <div className="hero-image" style={{ backgroundImage: `url(${ user.image })` }} />
        //     </div>
        //     <div className="column">
        //       <h1 className="title is-1">{user.name}</h1>
        //       <h2 className="subtitle is-2">{user.address}</h2>
        //       <p>{user.description}</p>
        //       <p>{user.bio}</p>
        //       <div>
        //         <Link
        //           to={'/properties'}
        //           className="button is-success"
        //         >Show properties for {user.name}</Link>
        //       </div>
        //     </div>
        //   </div>
        //   <div>
        {/* <Link
              to={`/users/${user._id}/edit`}
              className="button is-success"
            >Edit {user.name} Profile</Link> */}
        //   </div>
        // </section>
      );
    }
}

export default TenantProfile;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
//Login
import AuthLogin from './components/auth/Login';
import RegisterLogin from './components/auth/Register';

//Profiles
import TenantProfile from './components/profile/TenantProfile';
// import LandlordProfile from './components/profile/LandlordProfile';

//Common
// import NotFound from './components/common/NotFound';
import Navbar from './components/common/Navbar';
import SecureRoute from './components/common/SecureRoute';

//New Job
import JobNew from './components/job/New';

import Home from './components/Home';

// Styling
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <section className="section">
            <div className="container">
              <Switch>
                <SecureRoute path="/job/new" component={JobNew} />
                <SecureRoute exact path="/users/:id" component={TenantProfile} />
                {/* <SecureRoute exact path="/user2" component={LandlordProfile} /> */}
                <Route exact path="/login" component={AuthLogin} />
                <Route exact path="/register" component= {RegisterLogin} />
                <Route exact path="/" component={Home} />
                {/* <Route component={NotFound} /> */}
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

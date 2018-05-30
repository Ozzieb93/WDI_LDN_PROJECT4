import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
//Login
import AuthLogin from './components/auth/Login';
import RegisterLogin from './components/auth/Register';

//Profiles
import Profile from './components/profile/Profile';
import UsersEdit from './components/profile/Edit';
// import LandlordProfile from './components/profile/LandlordProfile';

//Common
import NotFound from './components/common/NotFound';
import Navbar from './components/common/Navbar';
import SecureRoute from './components/common/SecureRoute';

// Properties
import Properties from './components/profile/PropertiesShow';
//New Job
// import JobNew from './components/job/New';

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
                <SecureRoute exact path="/users/:id" component={Profile} />
                <SecureRoute path="/users/:id/edit" component={UsersEdit} />
                <Route exact path="/properties" component={Properties} />
                <Route exact path="/properties/:id" component={Properties} />
                <Route exact path="/login" component={AuthLogin} />
                <Route exact path="/register" component= {RegisterLogin} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
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

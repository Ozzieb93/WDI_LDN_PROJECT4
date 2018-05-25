import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Home from './components/Home';
import Profile from './components/profile/Profile';
import NotFound from './components/common/NotFound';

// Styling
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          {/* <Navbar /> */}
          <section className="section">
            <div className="container">
              <Switch>
                <Route exact path="/user" component={Profile} />
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

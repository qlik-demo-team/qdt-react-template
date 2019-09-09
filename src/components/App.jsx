import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';

const App = () => (
  <div>
    <Router>
      <div className="row">
        <div className="col-md-12">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default App;

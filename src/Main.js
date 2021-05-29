import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function Main() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/privacy" component={Privacy} />
          <Route path="/term" component={Terms} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

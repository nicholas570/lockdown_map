import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';

function Routerz() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route />
      </Switch>
    </Router>
  );
}

export default Routerz;

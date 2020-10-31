import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import HellMap from './views/HellMap';

function Routerz() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={HellMap} />
      </Switch>
    </Router>
  );
}

export default Routerz;

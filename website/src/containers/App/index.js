import Home from '../Home';
import Login from '../Login';
import SignUp from '../SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppState from '../../context/AppState';

export default function App() {
  return (
    <div>
      <AppState>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </Router>
      </AppState>
    </div>
  );
}

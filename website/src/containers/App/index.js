import Home from '../Home';
import Login from '../Login';
import MyAccount from '../MyAccount';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/my-account' component={MyAccount} />
        </Switch>
      </Router>
    </div>
  );
}

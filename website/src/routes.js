import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './containers/Header';
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';

// import ProtectedRoute from './hoc/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/' component={Home} /> {/* Will be ProtectedRoute once we have DB up and running*/}
      </Switch>
    </Router>
  )
}


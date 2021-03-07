import { Route, Redirect } from 'react-router-dom';

import useLocalStorage from '../hooks/useLocalStorage';

const ProtectedRoute = ({ component: Component, rest }) => {
  // eslint-disable-next-line
  const [accessToken, setAccessToken] = useLocalStorage('token', null);

  return (
    <Route render={
      rest => {
        if (accessToken) {
          return <Component {...rest} />
        } else {
          return <Redirect to={
            {
              pathname: '/login'
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;
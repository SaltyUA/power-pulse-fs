import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../store/selectors';

export const PrivateGuard = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const { token } = useSelector(state => state.auth);
  
  const shouldRedirect = !isLoggedIn && !isRefreshing && !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

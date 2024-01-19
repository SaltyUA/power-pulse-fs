import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { refreshUser } from './store/auth/thunk';
import { PublicGuard } from './guards/publicGuard';
import { PrivateGuard } from './guards/privateGuard';
import { selectIsLoggedIn, selectToken, selectUser } from './store/selectors';
import { PageLoader } from './components/AnimatedPage/PageLoader';
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Diary = lazy(() => import('./pages/Diary/Diary'));
const Products = lazy(() => import('./pages/Products/Products'));
const Exercises = lazy(() => import('./pages/Exercises/Exercises'));

function App() {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const publicRedirect = user.height ? '/diary' : '/profile';
  const { isLoading, isRefreshing, error } = useSelector(state => state.auth);
  const navigate = useNavigate()
  useEffect(() => {
    if (!error) return;
     navigate('/notfound')
    }, [error, navigate]);
  
  useEffect(() => {
dispatch(refreshUser());
  }, [dispatch, token, isLoggedIn]);

  return  isLoading ||  isRefreshing ? (
   <PageLoader/>
  ) :
    (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicGuard component={<Welcome />} redirectTo={publicRedirect} />
          }
        />
        <Route
          path="signup"
          element={
            <PublicGuard component={<SignUp />} redirectTo={publicRedirect} />
          }
        />
        <Route
          path="signin"
          element={
            <PublicGuard component={<SignIn />} redirectTo={publicRedirect} />
          }
        />
        <Route
          path="profile"
          element={
            <PrivateGuard component={<Profile />} redirectTo={'/signin'} />
          }
        />
        <Route
          path="diary"
          element={
            <PrivateGuard component={<Diary />} redirectTo={'/signin'} />
          }
        />
        <Route
          path="products"
          element={
            <PrivateGuard component={<Products />} redirectTo={'/signin'} />
          }
        />
        <Route
          path="exercises"
          element={
            <PrivateGuard component={<Exercises />} redirectTo={'/signin'} />
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;

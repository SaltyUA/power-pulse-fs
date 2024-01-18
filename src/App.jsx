import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from './store/auth/thunk';
import { PublicGuard } from './guards/publicGuard';
import { PrivateGuard } from './guards/privateGuard';

const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Diary = lazy(() => import('./pages/Diary/Diary'));
const Products = lazy(() => import('./pages/Products/Products'));
const Exercises = lazy(() => import('./pages/Exercises/Exercises'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  });

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Welcome />} />
        <Route
          path="signup"
          element={<PublicGuard component={<SignUp />} redirectTo={'/diary'} />}
        />
        <Route
          path="signin"
          element={<PublicGuard component={<SignIn />} redirectTo={'/diary'} />}
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

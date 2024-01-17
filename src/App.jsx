import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import { lazy } from 'react';
import PublicGuard from './guards/publicGuard';
import PrivateGuard from './guards/privateGuard';

const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Diary = lazy(() => import('./pages/Diary/Diary'));
const Products = lazy(() => import('./pages/Products/Products'));
const Exercises = lazy(() => import('./pages/Exercises/Exercises'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Welcome />} />
        <Route
          path="signup"
          element={
            <PublicGuard>
              <SignUp />
            </PublicGuard>
          }
        />
        <Route
          path="signin"
          element={
            <PublicGuard>
              <SignIn />
            </PublicGuard>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateGuard>
              <Profile />
            </PrivateGuard>
          }
        />
        <Route
          path="diary"
          element={
            <PrivateGuard>
              <Diary />
            </PrivateGuard>
          }
        />
        <Route
          path="products"
          element={
            <PrivateGuard>
              <Products />
            </PrivateGuard>
          }
        />
        <Route
          path="exercises"
          element={
            <PrivateGuard>
              <Exercises />
            </PrivateGuard>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;

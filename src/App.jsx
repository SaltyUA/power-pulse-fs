import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import { lazy } from 'react';

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
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="diary" element={<Diary />} />
        <Route path="products" element={<Products />} />
        <Route path="exercises" element={<Exercises />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;

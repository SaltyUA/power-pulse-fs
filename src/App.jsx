import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Welcome from './pages/Welcome/Welcome';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';
import Diary from './pages/Diary/Diary';
import Products from './pages/Products/Products';
import Exercises from './pages/Exercises/Exercises';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/products" element={<Products />} />
        <Route path="/exercises" element={<Exercises />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;

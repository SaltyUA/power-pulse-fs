import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectAuthError } from '../../store/selectors';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const error = useSelector(selectAuthError);

  useEffect(() => {
    error && toast.warning(error);
  }, [error]);

  return (
    <>
      <Header />
      <ToastContainer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

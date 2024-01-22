import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectAuthError } from '../../store/selectors';
import { useSelector } from 'react-redux';
import Verificationpopup from '../VerificationPopup/Verificationpopup';

const SharedLayout = () => {
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (error)
      error === 'Email not verified'
        ? toast.success(<Verificationpopup />)
        : toast.warning(error);
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

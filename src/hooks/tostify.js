import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type, message) => {
  const options = {
    position: 'top-center',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  };

  switch (type) {
    case 'info':
      toast.info(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    default:
      break;
  }
};

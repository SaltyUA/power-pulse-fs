import { useDispatch } from 'react-redux';
import { setResendShown } from '../../store/auth/slice';
import { ResendButton } from './VerificationPopup.styled';

const Verificationpopup = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setResendShown(true));

  return (
    <>
      <p>Please check your email for verification mail</p>
      <p>
        You can{' '}
        <ResendButton type="button" onClick={handleClick}>
          Resend email
        </ResendButton>{' '}
        if you didn`t get it we can resend it
      </p>
    </>
  );
};

export default Verificationpopup;

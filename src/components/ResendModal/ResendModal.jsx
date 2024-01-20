import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import sprite from '../../assets/images/sprite.svg';
import { selectIsResendShown } from '../../store/selectors';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { emailPattern } from '../../constants/patterns';
import { resendEmail } from '../../store/auth/thunk';
import Button from '../Button/Button';
import AuthInput from '../../components/AuthInput/AuthInput';
import {
  MessageContainer,
  ResendForm,
  StyledResendModal,
} from './ResendModal.styled';
import {
  StyledBackdrop,
  StyledCloseSvg,
} from '../ProductsComponents/SuccessPopUp/SuccessPopUp.styled';
import { setResendShown } from '../../store/auth/slice';

export const ResendModal = () => {
  const isResendShown = useSelector(selectIsResendShown);
  const message = useSelector((state) => state.auth.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isResendShown) return;
    const handleKeydown = (e) => {
      if (e.code === 'Escape') {
        dispatch(selectIsResendShown(false));
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isResendShown, dispatch]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(selectIsResendShown(false));
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      dispatch(resendEmail(values));
    },
    validationSchema: object().shape({
      email: string()
        .required('Please enter email')
        .matches(emailPattern, 'Please check is it true email'),
    }),
  });

  return (
    <StyledBackdrop onClick={handleBackdropClick}>
      <StyledResendModal>
        <StyledCloseSvg onClick={() => dispatch(setResendShown(false))}>
          <use href={sprite + '#icon-close'}></use>
        </StyledCloseSvg>
        {message ? (
          <MessageContainer>
            <p>{message}</p>
          </MessageContainer>
        ) : (
          <>
            <p className="title">Enter your email</p>
            <p>We will resend it:</p>
            <ResendForm onSubmit={formik.handleSubmit}>
              <AuthInput
                value={formik.values.email}
                onChange={formik.handleChange}
                className={
                  formik.touched.email
                    ? formik.errors.email
                      ? 'error'
                      : 'success'
                    : null
                }
                message={
                  formik.touched.email
                    ? formik.errors.email
                      ? formik.errors.email
                      : 'Success email'
                    : null
                }
                placeholder="Email"
                name="email"
                type="email"
              />
              <Button className="button" type="submit">
                Send
              </Button>
            </ResendForm>
          </>
        )}
      </StyledResendModal>
    </StyledBackdrop>
  );
};

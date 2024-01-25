import Button from '../../components/Button/Button';
import AuthInput from '../../components/AuthInput/AuthInput';
import { emailPattern } from '../../constants/patterns';
import {
  AuthText,
  FormContainer,
  FormTitle,
  FormWrapper,
  InputWrap,
  RedirectText,
  SignWrap,
} from './SignIn.styled';
import { Link, useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, verifyEmail } from '../../store/auth/thunk';
import { Statistics } from '../../components/Statistics/statistics';
import { PageAnimatedWrapper } from '../../components/AnimatedPage/PageAnimatedWrapper';
import { ResendModal } from '../../components/ResendModal/ResendModal';
import { selectIsResendShown } from '../../store/selectors';
import { useEffect } from 'react';
import { BackgroundContainer } from '../Welcome/Welcome.styled';
import { toast } from 'react-toastify';

const SignIn = () => {
  const isResendShown = useSelector(selectIsResendShown);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const verifyToken = searchParams.get('v');

  useEffect(() => {
    if (verifyToken) {
      dispatch(verifyEmail({ verificationToken: verifyToken }));
      toast.success('Verification successfull');
    }
  }, [dispatch, verifyToken]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(logIn(values));
    },
    validationSchema: object().shape({
      email: string()
        .required('Please enter email')
        .matches(emailPattern, 'Please check is it true email'),
      password: string()
        .min(6, 'Must have at least 6 symbols')
        .required('Please enter password'),
    }),
  });

  return (
    <PageAnimatedWrapper direction="Y">
      <BackgroundContainer>
        <SignWrap>
          <FormContainer>
            <FormTitle>Sign In</FormTitle>
            <AuthText>
              Welcome! Please enter your credentials to login to the platform:
            </AuthText>
            <FormWrapper onSubmit={formik.handleSubmit}>
              <InputWrap>
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
                <AuthInput
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={
                    formik.touched.password
                      ? formik.errors.password
                        ? 'error'
                        : 'success'
                      : null
                  }
                  message={
                    formik.touched.password
                      ? formik.errors.password
                        ? formik.errors.password
                        : 'Success password'
                      : null
                  }
                  placeholder="Password"
                  name="password"
                  type="password"
                />
              </InputWrap>
              <Button type="submit" width="136px">
                Sign In
              </Button>
              <RedirectText>
                Don’t have an account? <Link to={'/signup'}>Sign Up</Link>
              </RedirectText>
            </FormWrapper>
          </FormContainer>
          <Statistics />
        </SignWrap>
        {isResendShown && <ResendModal />}
      </BackgroundContainer>
    </PageAnimatedWrapper>
  );
};

export default SignIn;

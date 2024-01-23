import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import AuthInput from '../../components/AuthInput/AuthInput';
import { emailPattern } from '../../constants/patterns';
import {
  AuthText,
  FormContainer,
  FormTitle,
  FormWrapper,
  InputWrap,
  SignWrap,
} from '../SignIn/SignIn.styled';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/auth/thunk';
import { PageAnimatedWrapper } from '../../components/AnimatedPage/PageAnimatedWrapper';
import { Statistics } from '../../components/Statistics/statistics';
import { selectIsResendShown } from '../../store/selectors';
import { ResendModal } from '../../components/ResendModal/ResendModal';
import { BackgroundContainer } from '../Welcome/Welcome.styled';

const SignUp = () => {
  const dispatch = useDispatch();
  const isResendShown = useSelector(selectIsResendShown);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(register(values));
    },
    validationSchema: object().shape({
      name: string().required('Please enter your name'),
      email: string()
        .required('Please enter email')
        .matches(emailPattern, 'Please check is it true email'),
      password: string()
        .required('Please enter password')
        .min(6, 'Must have at least 6 symbols'),
    }),
  });

  return (
    <PageAnimatedWrapper direction="Y">
      <BackgroundContainer>
        <SignWrap>
          <FormContainer>
            <FormTitle>Sign Up</FormTitle>
            <AuthText>
              Thank you for your interest in our platform. To complete the
              registration process, please provide us with the following
              information.
            </AuthText>
            <FormWrapper onSubmit={formik.handleSubmit}>
              <InputWrap>
                <AuthInput
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className={
                    formik.touched.name
                      ? formik.errors.name
                        ? 'error'
                        : 'success'
                      : null
                  }
                  message={
                    formik.touched.name
                      ? formik.errors.name
                        ? formik.errors.name
                        : 'Success name'
                      : null
                  }
                  placeholder="Name"
                  name="name"
                  type="text"
                />
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
                  placeholder="Password"
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
                  name="password"
                  type="password"
                />
              </InputWrap>
              <Button type="submit">Sign Up</Button>
              <p>
                Already have an account? <Link to={'/signin'}>Sign In</Link>
              </p>
            </FormWrapper>
          </FormContainer>
          <Statistics />
        </SignWrap>
        {isResendShown && <ResendModal />}
      </BackgroundContainer>
    </PageAnimatedWrapper>
  );
};

export default SignUp;

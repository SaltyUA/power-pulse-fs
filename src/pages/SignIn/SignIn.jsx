import Button from '../../components/Button/Button';
import AuthInput from '../../components/AuthInput/AuthInput';
import { emailPattern } from '../../constants/patterns';
import {
  FormContainer,
  FormTitle,
  FormWrapper,
  InputWrap,
} from './SignIn.styled';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Container } from '../../App.styled';

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('SignUp', values);
    },
    validationSchema: object().shape({
      email: string()
        .required('Please enter email')
        .matches(emailPattern, 'Please check is it true email'),
    }),
    password: string().required('Please enter password'),
  });

  return (
    <Container>
      <FormContainer>
        <FormTitle>Sign In</FormTitle>
        <p>Welcome! Please enter your credentials to login to the platform:</p>
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
            SignIn
          </Button>
          <p>
            Don’t have an account? <Link to={'/signup'}>Sign Up</Link>
          </p>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default SignIn;

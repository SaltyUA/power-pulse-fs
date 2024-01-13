import Button from '../../components/Button/Button';
import AuthInput from '../../components/AuthInput/AuthInput';
import { emailPattern } from '../../constants/patterns';
import { FormContainer, FormTitle, FormWrapper } from './SignIn.styled';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, string } from 'yup';

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
    <FormContainer>
      <FormTitle>Sign In</FormTitle>
      <p>Welcome! Please enter your credentials to login to the platform:</p>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <AuthInput
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
          name="email"
          type="email"
        />
        <AuthInput
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
          name="password"
          type="password"
        />
        <Button type="submit" width="136px">
          SignIn
        </Button>
        <p>
          Don’t have an account? <Link to={'/signup'}>Sign Up</Link>
        </p>
      </FormWrapper>
    </FormContainer>
  );
};

export default SignIn;

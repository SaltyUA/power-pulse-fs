import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import AuthInput from '../../components/AuthInput/AuthInput';
import { emailPattern } from '../../constants/patterns';
import { FormContainer, FormTitle, FormWrapper } from '../SignIn/SignIn.styled';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Container } from '../../App.styled';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('SignIn', values);
    },
    validationSchema: object().shape({
      name: string().required('Please enter your name'),
      email: string()
        .required('Please enter email')
        .matches(emailPattern, 'Please check is it true email'),
    }),
    password: string().required('Please enter password'),
  });

  return (
    <Container>
      <FormContainer>
        <FormTitle>Sign Up</FormTitle>
        <p>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </p>
        <FormWrapper onSubmit={formik.handleSubmit}>
          <AuthInput
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            type="text"
          />
          <AuthInput
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            type="email"
          />
          <AuthInput
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            type="password"
          />
          <Button type="submit" width="136px">
            SignUp
          </Button>
          <p>
            Already have an account? <Link to={'/signin'}>Sign In</Link>
          </p>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default SignUp;

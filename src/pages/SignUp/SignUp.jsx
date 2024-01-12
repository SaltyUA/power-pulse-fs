import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import AuthInput from '../../components/AuthInput/AuthInput';
import { emailPattern } from '../../constants/patterns';
import { FormContainer, FormTitle, FormWrapper } from '../SignIn/SignIn.styled';

const SignUp = () => {
  return (
    <FormContainer>
      <FormTitle>Sign Up</FormTitle>
      <p>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </p>
      <FormWrapper>
        <AuthInput placeholder="Name" name="name" type="text" />
        <AuthInput
          placeholder="Email"
          name="email"
          type="email"
          pattern={emailPattern}
        />
        <AuthInput placeholder="Password" name="password" type="password" />
        <Button
          type="submit"
          width="136px"
          // onSubmit={handleSubmit}
        >
          SignUp
        </Button>
        <p>
          Already have an account? <Link to={'/signin'}>Sign In</Link>
        </p>
      </FormWrapper>
    </FormContainer>
  );
};

export default SignUp;

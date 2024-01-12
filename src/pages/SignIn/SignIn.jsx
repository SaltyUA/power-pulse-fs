import Button from '../../components/Button/Button';
import AuthInput from '../../components/AuthInput/AuthInput';
import { emailPattern } from '../../constants/patterns';
import { FormContainer, FormTitle, FormWrapper } from './SignIn.styled';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <FormContainer>
      <FormTitle>Sign In</FormTitle>
      <p>Welcome! Please enter your credentials to login to the platform:</p>
      <FormWrapper>
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

import Button from '../../components/Button/Button';

const Welcome = () => {
  return (
    <>
      <h1>Transforming your body shape with Power Pulse</h1>
      <Button to={'/signin'} title="SignIn" />
      <Button to={'/signup'} title="SignUp" />
    </>
  );
};

export default Welcome;

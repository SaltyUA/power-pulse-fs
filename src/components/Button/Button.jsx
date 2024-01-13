import { StyledButton } from './Button.styled';

const Button = ({ children, transparent, width, as, type, to }) => {
  return (
    <StyledButton
      type={type}
      as={as}
      to={to}
      $width={width}
      $transparent={transparent}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

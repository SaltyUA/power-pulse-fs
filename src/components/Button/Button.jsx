import { StyledButton } from './Button.styled';

const Button = ({ children, transparent, width, onSubmit, as, type, to }) => {
  return (
    <StyledButton
      type={type}
      as={as}
      to={to}
      onSubmit={onSubmit}
      $width={width}
      $transparent={transparent}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

import { StyledButton } from './Button.styled';

const Button = ({ onClick, children, transparent, width, as, type, to }) => {
  return (
    <StyledButton
      type={type}
      as={as}
      to={to}
      $width={width}
      $transparent={transparent}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

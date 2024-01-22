import { StyledButton } from './Button.styled';

const Button = ({
  disabled,
  onClick,
  children,
  transparent,
  width,
  as,
  type,
  to,
}) => {
  return (
    <StyledButton
      type={type}
      as={as}
      to={to}
      $width={width}
      $transparent={transparent}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

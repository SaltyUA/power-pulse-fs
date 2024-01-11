import { FullfilledButton } from './Button.styled';

const Button = ({ title, to }) => {
  return <FullfilledButton to={to}>{title}</FullfilledButton>;
};

export default Button;

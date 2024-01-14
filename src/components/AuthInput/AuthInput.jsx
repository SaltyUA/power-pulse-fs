import { StyledInput } from './AuthInput.styled';

const FormInput = ({
  placeholder,
  name,
  type,
  autofocus,
  pattern,
  onChange,
  value,
  error,
  message,
  className,
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      name={name}
      type={type}
      autoFocus={autofocus}
      pattern={pattern}
      onChange={onChange}
      value={value}
      error={error}
      message={message}
      required
      className={className}
    />
  );
};

export default FormInput;

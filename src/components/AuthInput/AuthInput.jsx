import { StyledInput } from './AuthInput.styled';

const FormInput = ({
  placeholder,
  name,
  type,
  autofocus,
  pattern,
  onChange,
  value,
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
      required
    />
  );
};

export default FormInput;

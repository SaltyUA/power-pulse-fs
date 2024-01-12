import { StyledInput } from './AuthInput.styled';

const FormInput = ({ placeholder, name, type, autofocus, pattern }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      name={name}
      type={type}
      autoFocus={autofocus}
      pattern={pattern}
    />
  );
};

export default FormInput;

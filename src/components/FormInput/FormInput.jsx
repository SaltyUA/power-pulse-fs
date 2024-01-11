import { StyledInput } from './FormInput.styled';

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

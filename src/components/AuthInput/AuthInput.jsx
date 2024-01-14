import {
  InputWrapper,
  StyledInput,
  ValidationIcon,
  ValidationMessage,
} from './AuthInput.styled';
import sprite from '../../assets/images/sprite.svg';

const FormInput = ({
  placeholder,
  name,
  type,
  onChange,
  value,
  className,
  message,
}) => {
  return (
    <InputWrapper>
      <StyledInput
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required
        className={className}
        message={message}
      />
      {message && (
        <ValidationMessage className={className}>
          <ValidationIcon>
            <use href={sprite + '#icon-checkbox'}></use>
          </ValidationIcon>
          {message}
        </ValidationMessage>
      )}
    </InputWrapper>
  );
};

export default FormInput;

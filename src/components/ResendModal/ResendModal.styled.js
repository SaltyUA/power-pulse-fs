import styled from 'styled-components';
import { StyledModal } from '../ProductsComponents/SuccessPopUp/SuccessPopUp.styled';
import { styleGuide } from '../../constants/styleGuide';

export const StyledResendModal = styled(StyledModal)`
  padding: 25px;
  width: auto;
  height: auto;
  gap: 10px;
  background-image: none;
`;

export const ResendForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MessageContainer = styled.div`
  padding: 20px 10px;
  & p {
    color: ${styleGuide.orange2Color};
  }
`;

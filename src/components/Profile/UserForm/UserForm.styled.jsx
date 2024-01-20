import { Form } from 'formik';

import styled from 'styled-components';

import { styleGuide } from '../../../constants/styleGuide';

export const FormStyle = styled(Form)`
  width: 100%;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const ContainerNameEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 14px;
`;

export const ContainerFullParams = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 20px;
`;

export const ContainerParams = styled.div`
  display: flex;
  gap: 14px;
`;

export const ContainerActivity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 40px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: ${styleGuide.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
`;

export const FormLabelSecond = styled.label`
  display: flex;
  flex-direction: column;
  width: 160px;

  color: ${styleGuide.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  gap: 4px;
`;

export const FormInput = styled.input`
  padding: 14px;

  width: 100%;

  color: ${styleGuide.whiteColor};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${styleGuide.greyTextColor};
  background: transparent;

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${styleGuide.orangeColor};
    background-color: transparent;
    outline: none;
  }

  @media (min-width: 834px) {
  }
`;

export const FormInputEmail = styled.input`
  padding: 14px;

  width: 100%;

  color: ${styleGuide.greyTextColor};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${styleGuide.greyTextColor};
  background: transparent;

  @media (min-width: 834px) {
  }
`;

export const BloodTitle = styled.p`
  color: ${styleGuide.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  margin-bottom: 5px;
`;

export const RadioLabelBlood = styled.label`
  display: flex;
  align-items: center;

  gap: 8px;

  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;

  color: ${styleGuide.whiteColor};

  cursor: pointer;
`;

export const RadioLabelActivity = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 100%;

  font-size: 14px;
  line-height: 1.29;

  color: ${styleGuide.whiteColor};

  cursor: pointer;

  @media (min-width: 375px) {
    width: 326px;
  }
`;

export const RadioBtn = styled.input`
  appearance: none;

  min-width: 18px;
  min-height: 18px;

  font: inherit;
  color: ${styleGuide.orangeColor};
  background-color: transparent;

  border: 0.11em solid ${styleGuide.greyTextColor};
  border-radius: 50%;

  cursor: pointer;

  &:checked {
    border: 0.11em solid ${styleGuide.orange2Color};
    background: radial-gradient(
      circle,
      ${styleGuide.orange2Color} 40%,
      transparent 50%
    );
  }

  @media (min-width: 834px) {
    margin-top: 0;
  }
`;

export const FormSaveBtn = styled.button`
  margin-bottom: 44px;
  padding: 12px 40px;

  font-weight: 500;
  line-height: 1.43;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;

  border: 1px solid ${styleGuide.orangeColor};
  border-radius: 12px;

  background-color: ${styleGuide.orangeColor};
  color: ${styleGuide.whiteColor};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
  }

  @media (min-width: 834px) {
  }
`;

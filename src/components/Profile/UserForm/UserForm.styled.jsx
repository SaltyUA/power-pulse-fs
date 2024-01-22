import { Form } from 'formik';

import styled from 'styled-components';

import { styleGuide } from '../../../constants/styleGuide';

export const FormStyle = styled(Form)`
  margin-top: 19px;
  margin-bottom: 44px;

  width: 100%;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    margin-top: 38px;
    margin-bottom: 54px;

    width: 704px;
  }

  @media (min-width: 1440px) {
    margin: 0 64px 0 0;
  }
`;

export const ContainerNameEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 14px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContainerFullParams = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContainerParams = styled.div`
  display: flex;
  gap: 14px;
`;

export const ContainerBloodSex = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const ContainerActivity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 38px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;

export const WrapperBloodSex = styled.div`
  display: flex;
  gap: 21px;
  flex-direction: column;

  @media (min-width: 375px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const ContainerErrorValidation = styled.div`
  margin-top: -4px;

  color: ${styleGuide.errorColor};
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.12px;

  @media (min-width: 768px) {
    font-size: 12px;
  }
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

  @media (min-width: 768px) {
    gap: 8px;

    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const FormLabelSecond = styled.label`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 2);
  gap: 4px;

  color: ${styleGuide.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  @media (min-width: 375px) {
    width: 160px;
  }

  @media (min-width: 768px) {
    width: 165px;
    gap: 8px;

    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
  }
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

  @media (min-width: 768px) {
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const FormInputName = styled.input`
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

  @media (min-width: 768px) {
    width: 345px;

    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
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

  @media (min-width: 768px) {
    width: 345px;

    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const BloodTitle = styled.p`
  color: ${styleGuide.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;

    margin-bottom: 8px;
  }
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

  @media (min-width: 768px) {
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
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

  @media (min-width: 768px) {
    width: 530px;

    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
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

  @media (min-width: 768px) {
    margin-top: 0;

    min-width: 20px;
    min-height: 20px;
  }
`;

export const FormSaveBtn = styled.button`
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

  @media (min-width: 768px) {
    padding: 16px 50px;

    font-size: 20px;
    line-height: 1.2;
  }
`;

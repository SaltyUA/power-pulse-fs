import { Form, Field } from 'formik';

import styled from 'styled-components';

import { styleGuide } from '../../../constants/styleGuide';

export const Xa = styled(Field)`
  color: ${styleGuide.blackColor};
`;

export const FormStyle = styled(Form)``;

export const Ya = styled.div``;

export const FormLabel = styled.label`
  color: ${styleGuide.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
`;

export const FormLabelSecond = styled.label`
  width: 160px;

  color: ${styleGuide.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
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

export const BloodTitle = styled.p`
  color: ${styleGuide.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
`;

export const ContainerParams = styled.div`
  display: flex;
  gap: 14px;
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

  @media (min-width: 834px) {
    width: 212px;
  }
`;

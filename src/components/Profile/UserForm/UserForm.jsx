import { useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const userFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  height: Yup.number()
    .positive('Must be a positive number')
    .min(150, 'Must be a number from 150 to 300')
    .max(300, 'Must be a number from 150 to 300')
    .required('Height is required'),
  currentWeight: Yup.number()
    .positive('Must be a positive number')
    .min(35, 'Must be a number from 35 to 500')
    .max(500, 'Must be a number from 35 to 500')
    .required('Weight is required'),
  desiredWeight: Yup.number()
    .positive('Must be a positive number')
    .min(35, 'Must be a number from 35 to 500')
    .max(500, 'Must be a number from 35 to 500')
    .required('Weight is required'),
  birthday: Yup.date()
    .min(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      'You must be at least 18 years old'
    )
    .required('Birthday is required'),
  blood: Yup.number()
    .oneOf([1, 2, 3, 4], 'Invalid blood type')
    .required('Blood type is required'),
  sex: Yup.string()
    .oneOf(['male', 'female'], 'Invalid gender')
    .required('Gender is required'),
  levelActivity: Yup.number()
    .oneOf([1, 2, 3, 4, 5], 'Invalid activity level')
    .required('Activity level is required'),
});

const UserForm = () => {
//   const initialValues = {
//     name: user.name ?? '',
//     height: user.height ?? 150,
//     currentWeight: user.currentWeight ?? 70,
//     desiredWeight: user.desiredWeight ?? 60,
//     birthday: user.birthday ?? '1990-01-01',
//     blood: user.blood ?? 1,
//     sex: user.sex ?? 'male',
//     levelActivity: user.levelActivity ?? 1,
//   };

  return <Formik></Formik>;
};

export default UserForm;

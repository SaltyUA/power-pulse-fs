import { useDispatch, useSelector } from 'react-redux';

import { updateUserInfo } from 'redux/operations';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const userFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  height: Yup.number()
    .positive('Height must be a positive number')
    .min(150, 'Must be a number from 150 to 300')
    .max(300, 'Must be a number from 150 to 300')
    .required('Height is required'),
  currentWeight: Yup.number()
    .positive('Weight must be a positive number')
    .min(35, 'Weight must be a number from 35 to 500')
    .max(500, 'Weight must be a number from 35 to 500')
    .required('Current weight is required'),
  desiredWeight: Yup.number()
    .positive('Weight must be a positive number')
    .min(35, 'Weight must be a number from 35 to 500')
    .max(500, 'Weight must be a number from 35 to 500')
    .required('Desired weight is required'),
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
  const dispatch = useDispatch();
  const user = useSelector();

  const initialValues = {
    name: user.name ?? '',
    height: user.height ?? 150,
    currentWeight: user.currentWeight ?? 35,
    desiredWeight: user.desiredWeight ?? 35,
    birthday: user.birthday ?? '1990-01-01',
    blood: user.blood ?? 1,
    sex: user.sex ?? 'male',
    levelActivity: user.levelActivity ?? 1,
  };

  const handleSubmit = (values) => {
    dispatch(updateUserInfo(values)); // updateUserInfo - майбутня фукнція в redux/operations
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userFormSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form>
          <label>
            Name
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={user.email}
              readOnly
              disabled
            />
          </label>
          <label>
            Height
            <input
              type="number"
              id="height"
              name="height"
              value={values.height}
              onChange={handleChange}
            />
          </label>
          <label>
            Current Weight
            <input
              type="number"
              id="currentWeight"
              name="currentWeight"
              value={values.currentWeight}
              onChange={handleChange}
            />
          </label>
          <label>
            Desired Weight
            <input
              type="number"
              id="desiredWeight"
              name="desiredWeight"
              value={values.desiredWeight}
              onChange={handleChange}
            />
          </label>
          <label>
            Date of birth
            <input type="date" />
          </label>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;

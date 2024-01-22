import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../../store/selectors';
import { updateUserData } from '../../../store/auth/thunk';

import { Formik } from 'formik';
// import * as Yup from 'yup';

import {
  FormStyle,
  ContainerNameEmail,
  ContainerFullParams,
  ContainerParams,
  ContainerActivity,
  FormLabel,
  FormLabelSecond,
  FormInput,
  BloodTitle,
  RadioLabelBlood,
  RadioLabelActivity,
  RadioBtn,
  FormSaveBtn,
  FormInputEmail,
  WrapperBloodSex,
  ContainerBloodSex,
  FormInputName,
  ContainerErrorValidation,
} from './UserForm.styled';

<<<<<<< HEAD
// const userFormSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Name is required'),
//   height: Yup.number()
//     .positive('Height must be a positive number')
//     .min(150, 'Must be a number from 150 to 300')
//     .max(300, 'Must be a number from 150 to 300')
//     .required('Height is required'),
//   currentWeight: Yup.number()
//     .positive('Weight must be a positive number')
//     .min(35, 'Weight must be a number from 35 to 500')
//     .max(500, 'Weight must be a number from 35 to 500')
//     .required('Current weight is required'),
//   desiredWeight: Yup.number()
//     .positive('Weight must be a positive number')
//     .min(35, 'Weight must be a number from 35 to 500')
//     .max(500, 'Weight must be a number from 35 to 500')
//     .required('Desired weight is required'),
//   birthday: Yup.date()
//     .min(
//       new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
//       'You must be at least 18 years old'
//     )
//     .required('Birthday is required'),
//   blood: Yup.number()
//     .oneOf([1, 2, 3, 4], 'Invalid blood type')
//     .required('Blood type is required'),
//   sex: Yup.string()
//     .oneOf(['male', 'female'], 'Invalid gender')
//     .required('Gender is required'),
//   levelActivity: Yup.number()
//     .oneOf([1, 2, 3, 4, 5], 'Invalid activity level')
//     .required('Activity level is required'),
// });
=======
const userFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .max(50, 'Name is too long!')
    .required('Name is required'),
  height: Yup.number()
    .positive('Must be a positive number')
    .min(150, 'Must be >150')
    .max(300, 'Must be <300')
    .required('Height is required'),
  currentWeight: Yup.number()
    .positive('Must be a positive number')
    .min(35, 'Must be >35')
    .max(500, 'Must be <500')
    .required('Current weight is required'),
  desiredWeight: Yup.number()
    .positive('Must be a positive number')
    .min(35, 'Must be >35')
    .max(500, 'Must be <500')
    .required('Desired weight is required'),
  birthday: Yup.date()
    .max(new Date(), 'Invalid date')
    .test('age', 'You must be over 18 years old', function (value) {
      const cutoffDate = new Date();
      cutoffDate.setFullYear(cutoffDate.getFullYear() - 18);
      return value <= cutoffDate;
    }),
  blood: Yup.number()
    .oneOf([1, 2, 3, 4], 'Invalid blood type')
    .required('Blood type is required'),
  sex: Yup.string()
    .oneOf(['male', 'female'], 'Invalid gender')
    .required('Sex is required'),
  levelActivity: Yup.number()
    .oneOf([1, 2, 3, 4, 5], 'Invalid activity level')
    .required('Activity level is required'),
});
>>>>>>> 2da1d2dae37f03228550594142d4b7d00f64003c

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const initialValues = {
    name: user.name ?? '',
    height: user.height ?? 150,
    currentWeight: user.currentWeight ?? 35,
    desiredWeight: user.desiredWeight ?? 35,
    birthday: formatDate(user.birthday) ?? '1990-01-01',
    blood: String(user.blood) ?? '1',
    sex: user.sex ?? 'male',
    levelActivity: String(user.levelActivity) ?? '1',
  };
function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

<<<<<<< HEAD
  return `${day}.${month}.${year}`;
}
  const handleSubmit = (values) => {
        const { birthday, blood, currentWeight, desiredWeight, height, levelActivity, name, sex } = values;
        dispatch(updateUserData({
      name,
      height,
      currentWeight,
      desiredWeight,
      birthday: formatDate(birthday),
      blood,
      sex,
      levelActivity: Number(levelActivity)
    }));
=======
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  const handleSubmit = (values, { setSubmitting }) => {
    const {
      birthday,
      blood,
      currentWeight,
      desiredWeight,
      height,
      levelActivity,
      name,
      sex,
    } = values;

    dispatch(
      updateUserData({
        name,
        height,
        currentWeight,
        desiredWeight,
        birthday: formatDate(birthday),
        blood: Number(blood),
        sex,
        levelActivity: Number(levelActivity),
      })
    );

    setSubmitting(false);
>>>>>>> 2da1d2dae37f03228550594142d4b7d00f64003c
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={userFormSchema}  
      onSubmit={handleSubmit}
    >
      {({ handleChange, values, errors, touched }) => (
        <FormStyle>
          <ContainerNameEmail>
            <FormLabel>
              Name
              <FormInputName
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name ? (
                <ContainerErrorValidation>
                  {errors.name}
                </ContainerErrorValidation>
              ) : null}
            </FormLabel>
            <FormLabel>
              Email
              <FormInputEmail
                type="text"
                id="email"
                name="email"
                defaultValue={user.email}
                readOnly
                disabled
              />
            </FormLabel>
          </ContainerNameEmail>

          <ContainerFullParams>
            <ContainerParams>
              <FormLabelSecond>
                Height
                <FormInput
                  type="number"
                  id="height"
                  name="height"
                  value={values.height}
                  onChange={handleChange}
                />
                {errors.height && touched.height ? (
                  <ContainerErrorValidation>
                    {errors.height}
                  </ContainerErrorValidation>
                ) : null}
              </FormLabelSecond>
              <FormLabelSecond>
                Current Weight
                <FormInput
                  type="number"
                  id="currentWeight"
                  name="currentWeight"
                  value={values.currentWeight}
                  onChange={handleChange}
                />
                {errors.currentWeight && touched.currentWeight ? (
                  <ContainerErrorValidation>
                    {errors.currentWeight}
                  </ContainerErrorValidation>
                ) : null}
              </FormLabelSecond>
            </ContainerParams>

            <ContainerParams>
              <FormLabelSecond>
                Desired Weight
                <FormInput
                  type="number"
                  id="desiredWeight"
                  name="desiredWeight"
                  value={values.desiredWeight}
                  onChange={handleChange}
                />
                {errors.desiredWeight && touched.desiredWeight ? (
                  <ContainerErrorValidation>
                    {errors.desiredWeight}
                  </ContainerErrorValidation>
                ) : null}
              </FormLabelSecond>
              <FormLabelSecond>
                Date of birth
                <FormInput
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={values.birthday}
                  onChange={handleChange}
                  style={{ pointerEvents: 'none' }}
                />
                {errors.birthday && touched.birthday ? (
                  <ContainerErrorValidation>
                    {errors.birthday}
                  </ContainerErrorValidation>
                ) : null}
              </FormLabelSecond>
            </ContainerParams>
          </ContainerFullParams>

          <ContainerBloodSex>
            <BloodTitle>Blood</BloodTitle>
            <WrapperBloodSex>
              <div style={{ display: 'flex', gap: '8px' }}>
                <RadioLabelBlood>
                  <RadioBtn
                    type="radio"
                    name="blood"
                    value="1"
                    checked={values.blood === '1'}
                    onChange={handleChange}
                  />
                  1
                </RadioLabelBlood>
                <RadioLabelBlood>
                  <RadioBtn
                    type="radio"
                    name="blood"
                    value="2"
                    checked={values.blood === '2'}
                    onChange={handleChange}
                  />
                  2
                </RadioLabelBlood>
                <RadioLabelBlood>
                  <RadioBtn
                    type="radio"
                    name="blood"
                    value="3"
                    checked={values.blood === '3'}
                    onChange={handleChange}
                  />
                  3
                </RadioLabelBlood>
                <RadioLabelBlood>
                  <RadioBtn
                    type="radio"
                    name="blood"
                    value="4"
                    checked={values.blood === '4'}
                    onChange={handleChange}
                  />
                  4
                </RadioLabelBlood>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <RadioLabelBlood>
                  <RadioBtn
                    type="radio"
                    name="sex"
                    value="male"
                    checked={values.sex === 'male'}
                    onChange={handleChange}
                  />
                  Male
                </RadioLabelBlood>
                <RadioLabelBlood>
                  <RadioBtn
                    type="radio"
                    name="sex"
                    value="female"
                    checked={values.sex === 'female'}
                    onChange={handleChange}
                  />
                  Female
                </RadioLabelBlood>
              </div>
            </WrapperBloodSex>
          </ContainerBloodSex>

          <ContainerActivity>
            <RadioLabelActivity>
              <RadioBtn
                type="radio"
                name="levelActivity"
                value="1"
                checked={values.levelActivity === '1'}
                onChange={handleChange}
              />
              Sedentary lifestyle (little or no physical activity)
            </RadioLabelActivity>
            <RadioLabelActivity>
              <RadioBtn
                type="radio"
                name="levelActivity"
                value="2"
                checked={values.levelActivity === '2'}
                onChange={handleChange}
              />
              Light activity (light exercises/sports 1-3 days per week)
            </RadioLabelActivity>
            <RadioLabelActivity>
              <RadioBtn
                type="radio"
                name="levelActivity"
                value="3"
                checked={values.levelActivity === '3'}
                onChange={handleChange}
              />
              Moderately active (moderate exercises/sports 3-5 days per week)
            </RadioLabelActivity>
            <RadioLabelActivity>
              <RadioBtn
                type="radio"
                name="levelActivity"
                value="4"
                checked={values.levelActivity === '4'}
                onChange={handleChange}
              />
              Very active (intense exercises/sports 6-7 days per week)
            </RadioLabelActivity>
            <RadioLabelActivity>
              <RadioBtn
                type="radio"
                name="levelActivity"
                value="5"
                checked={values.levelActivity === '5'}
                onChange={handleChange}
              />
              Extremely active (very strenuous exercises/ sports and physical
              work)
            </RadioLabelActivity>
          </ContainerActivity>

          <FormSaveBtn type="submit">Save</FormSaveBtn>
        </FormStyle>
      )}
    </Formik>
  );
};

export default UserForm;

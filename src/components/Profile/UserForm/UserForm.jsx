import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../../store/selectors';
import { updateUserData } from '../../../store/auth/thunk';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
  FormLabel,
  FormLabelSecond,
  FormInput,
  BloodTitle,
  ContainerParams,
  FormSaveBtn,
} from './UserForm.styled';

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
  const user = useSelector(selectUser);

  const initialValues = {
    name: user.name ?? '',
    height: user.height ?? 150,
    currentWeight: user.currentWeight ?? 35,
    desiredWeight: user.desiredWeight ?? 35,
    birthday: user.birthday ?? '1990-01-01',
    blood: user.blood ?? '1',
    sex: user.sex ?? 'male',
    levelActivity: user.levelActivity ?? '1',
  };

  const handleSubmit = (values) => {
    dispatch(updateUserData(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userFormSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form>
          <div className="name_email">
            <FormLabel>
              Name
              <FormInput
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              Email
              <FormInput
                type="text"
                id="email"
                name="email"
                defaultValue={user.email}
                readOnly
                disabled
              />
            </FormLabel>
          </div>

          <div className="full_height_weight">
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
              </FormLabelSecond>
              <FormLabelSecond>
                Date of birth
                <FormInput
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={values.birthday}
                  onChange={handleChange}
                />
              </FormLabelSecond>
            </ContainerParams>
          </div>

          <BloodTitle>Blood</BloodTitle>
          <div className="blood_sex">
            <div className="blood">
              <label>
                <input
                  type="radio"
                  name="blood"
                  value="1"
                  checked={values.blood === '1'}
                  onChange={handleChange}
                />
                1
              </label>
              <label>
                <input
                  type="radio"
                  name="blood"
                  value="2"
                  checked={values.blood === '2'}
                  onChange={handleChange}
                />
                2
              </label>
              <label>
                <input
                  type="radio"
                  name="blood"
                  value="3"
                  checked={values.blood === '3'}
                  onChange={handleChange}
                />
                3
              </label>
              <label>
                <input
                  type="radio"
                  name="blood"
                  value="4"
                  checked={values.blood === '4'}
                  onChange={handleChange}
                />
                4
              </label>
            </div>

            <div className="sex">
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="male"
                  checked={values.sex === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="female"
                  checked={values.sex === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>

          <div className="activity">
            <label>
              <input
                type="radio"
                name="levelActivity"
                value="1"
                checked={values.levelActivity === '1'}
                onChange={handleChange}
              />
              Sedentary lifestyle (little or no physical activity)
            </label>
            <label>
              <input
                type="radio"
                name="levelActivity"
                value="2"
                checked={values.levelActivity === '2'}
                onChange={handleChange}
              />
              Light activity (light exercises/sports 1-3 days per week)
            </label>
            <label>
              <input
                type="radio"
                name="levelActivity"
                value="3"
                checked={values.levelActivity === '3'}
                onChange={handleChange}
              />
              Moderately active (moderate exercises/sports 3-5 days per week)
            </label>
            <label>
              <input
                type="radio"
                name="levelActivity"
                value="4"
                checked={values.levelActivity === '4'}
                onChange={handleChange}
              />
              Very active (intense exercises/sports 6-7 days per week)
            </label>
            <label>
              <input
                type="radio"
                name="levelActivity"
                value="5"
                checked={values.levelActivity === '5'}
                onChange={handleChange}
              />
              Extremely active (very strenuous exercises/sports and physical
              work)
            </label>
          </div>

          <FormSaveBtn type="submit">Save</FormSaveBtn>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;

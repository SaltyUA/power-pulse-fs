// import { useDispatch, useSelector } from 'react-redux';

// import { selectUser } from 'redux/selectors';
// import { updateUserInfo } from 'redux/operations';

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
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  // const initialValues = {
  //   name: user.name ?? '',
  //   height: user.height ?? 150,
  //   currentWeight: user.currentWeight ?? 35,
  //   desiredWeight: user.desiredWeight ?? 35,
  //   birthday: user.birthday ?? '1990-01-01',
  //   blood: user.blood ?? 1,
  //   sex: user.sex ?? 'male',
  //   levelActivity: user.levelActivity ?? 1,
  // };

  const initialValues = {
    name: 'Misha',
    height: 150,
    currentWeight: 35,
    desiredWeight: 35,
    birthday: '1990-01-01',
    blood: 1,
    sex: 'male',
    levelActivity: 1,
  };

  const handleSubmit = (values) => {
    console.log(values);
    // dispatch(updateUserInfo(values)); // updateUserInfo - майбутня фукнція в redux/operations
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
                // defaultValue={user.email}
                readOnly
                disabled
              />
            </label>
          </div>

          <div className="full_height_weight">
            <div className="height_currentWeight">
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
            </div>

            <div className="desiredWeight_birthday">
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
            </div>
          </div>

          <p>Blood</p>
          <div className="blood_sex">
            <div className="blood">
              <label>
                <input type="radio" name="blood" />1
              </label>
              <label>
                <input type="radio" name="blood" />2
              </label>
              <label>
                <input type="radio" name="blood" />3
              </label>
              <label>
                <input type="radio" name="blood" />4
              </label>
            </div>

            <div className="sex">
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="male"
                  checked={values.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="female"
                  checked={values.gender === 'female'}
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
                name="activity"
                value="1"
                checked={values.activity === '1'}
                onChange={handleChange}
              />
              Sedentary lifestyle (little or no physical activity)
            </label>
            <label>
              <input
                type="radio"
                name="activity"
                value="2"
                checked={values.activity === '2'}
                onChange={handleChange}
              />
              Light activity (light exercises/sports 1-3 days per week)
            </label>
            <label>
              <input
                type="radio"
                name="activity"
                value="3"
                checked={values.activity === '3'}
                onChange={handleChange}
              />
              Moderately active (moderate exercises/sports 3-5 days per week)
            </label>
            <label>
              <input
                type="radio"
                name="activity"
                value="4"
                checked={values.activity === '4'}
                onChange={handleChange}
              />
              Very active (intense exercises/sports 6-7 days per week)
            </label>
            <label>
              <input
                type="radio"
                name="activity"
                value="5"
                checked={values.activity === '5'}
                onChange={handleChange}
              />
              Extremely active (very strenuous exercises/sports and physical
              work)
            </label>
          </div>

          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;

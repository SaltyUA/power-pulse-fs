import { useFormik } from 'formik';
import { StyledForm, StyledWeightInput } from './AddProductForm.styled';
import { useDispatch } from 'react-redux';
import { addProductThunk } from '../../../store/products/operations';
import { getCurrentDate } from '../../../hooks';
import { object, string } from 'yup';
import { setCalories } from '../../../store/products/sliceProducts';

export const AddProductFrom = ({ data, closeModal }) => {
  const { title, calories, _id } = data || {};
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title,
      weight: 0,
      calories: 0,
    },
    validationSchema: object().shape({
      weight: string()
        .required('Please enter weight')
        .min(2, 'Weight must be at least 2 characters')
        .max(4, 'Weight cannot be more than 4 characters'),
    }),
    onSubmit: (values) => {
      const { weight, calories } = values;
        const newProduct = {
        date: getCurrentDate(),
        amount: weight,
        calories: Math.ceil(calories),
      };
      dispatch(addProductThunk({ newProduct, _id }));
      dispatch(setCalories(Math.ceil(calories)))
    },
  });

  const handleInputChange = (event) => {
    if (isNaN(event.target.value) && event.target.value !== '') return;
    if (event.target.value === '') {
      formik.setValues({
        ...formik.values,
        calories: '',
      });
    }
    formik.handleChange(event);
    if (event.target.value > 0) {
      const newWeight = parseFloat(Number(event.target.value));
      const newCalories = (newWeight * calories) / 100;
      formik.setValues({
        ...formik.values,
        weight: newWeight,
        calories: newCalories,
      });
    }
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <div className="inputs-block">
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={formik.values.title}
          disabled
          className="title-input"
        />
        <div className="weight-input-block">
          <StyledWeightInput
            id="weight"
            name="weight"
            type="text"
            required
            pattern="\d*\.?\d*"
            onChange={handleInputChange}
            value={formik.values.weight}
          />
          <p className="error-message">{formik.errors.weight}</p>
          <span className="grams-span">grams</span>
        </div>
      </div>

      <div className="calories-block">
        <span className="calories-span">Calories: </span>
        <input
          id="calories"
          name="calories"
          type="number"
          disabled
          value={formik.values.calories}
          className="calories-input"
        />
      </div>
      <div className="button-block">
        <button
          className="add-button"
          type="submit"
          disabled={
            formik.errors.weight || formik.values.weight === 0 ? true : false
          }
        >
          Add to diary
        </button>
        <button onClick={closeModal} className="cancel-button" type="button">
          Cancel
        </button>
      </div>
    </StyledForm>
  );
};

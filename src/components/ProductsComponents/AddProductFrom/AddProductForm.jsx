import { useFormik } from 'formik';
import { StyledForm } from './AddProductForm.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setIsSuccessPopUpShown } from '../../../store/products/sliceProducts';
function Data() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  return `${day}/${month}/${year}`;
}

export const AddProductFrom = ({ data, closeModal }) => {
  const { title, weight, calories, _id } = data || {};
  
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      weight: '',
      calories: '',
    },
    onSubmit: (values) => {
      const { weight, calories } = values;

      const newProduct = {
        _id,
        date: Data(),
        weight,
        calories,
      };
      console.log(newProduct);
      closeModal();
      dispatch(setIsSuccessPopUpShown(true));
    },
  });

  useEffect(() => {
    if (!data) return;
    formik.setValues({
     title,
      weight,
      calories,
    });
  }, [title, weight, calories]);
  const handleInputChange = (event) => {
    if (isNaN(event.target.value) && event.target.value !== '') return;
    if (event.target.value === '') {
      formik.setValues({
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
          value={formik.values.title}
          disabled
          className="title-input"
        />
        <div className="weight-input-block">
          <input
            id="weight"
            name="weight"
            type="text"
            required
            pattern="\d*\.?\d*"
            onChange={handleInputChange}
            value={formik.values.weight}
            className="weight-input"
          />
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
        <button className="add-button" type="submit">
          Add to diary
        </button>
        <button onClick={closeModal} className="cancel-button" type="button">
          Cancel
        </button>
      </div>
    </StyledForm>
  );
};

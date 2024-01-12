import { useMemo, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { SelectCategory } from '../FormSelects/CategoriesSelect';
import { SelectRecommended } from '../FormSelects/RecommendedSelect';
import { StyledForm, StyledSearchSvg, StyledxSvg } from './ProductsFrom.styled';

export const ProductsForm = () => {
  const [isCrossShown, setIsCrossShown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { search, category, recommended } = params;
 
  useEffect(() => {
    if (!search && !category && !recommended) return;
    const newSearch = {
      ...(search !== undefined && { search }),
    ...(category !== undefined && { category }),
    ...(recommended !== undefined && { recommended }),
    }
    console.log(newSearch)
}, [search, category, recommended])

  const formik = useFormik({
    initialValues: {
      search: search ?? '',
      category: category ?? '',
      recommended: recommended ?? 'All',
    },
    onSubmit: (values) => {
      const { search } = values;
      if (search) {
        setSearchParams((prevSearchParams) => {
          const updatedParams = new URLSearchParams(prevSearchParams);
          updatedParams.set('search', search);
          return updatedParams;
        });
      }
    },
  });

  const handleInputChange = (event) => {
        setIsCrossShown(true)
        formik.handleChange(event);
  };
  
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <div className="input-search-block">
        <input
          id="search"
          name="search"
          type="text"
          onChange={handleInputChange}
          value={formik.values.search}
          placeholder="Search"
        />
        <div className="svgs-search-block">
          {isCrossShown &&
            <button type='button' onClick={() => {
              setIsCrossShown(false)
              setSearchParams((prevSearchParams) => {
  const updatedParams = new URLSearchParams(prevSearchParams);

  updatedParams.delete('search');

  return updatedParams;
});
              formik.values.search = ''
            }}>
              <StyledxSvg />
            </button>}
          <button type="submit">
            <StyledSearchSvg />
          </button>
        </div>
      </div>

      <div className="selects-block">
        <SelectCategory
          name="category"
          dataFunc={(option) => {
            formik.setFieldValue('category', option.value);
            //  formik.handleSubmit()
            setSearchParams((prevSearchParams) => {
              const updatedParams = new URLSearchParams(prevSearchParams);
              updatedParams.set('category', option.value);
              return updatedParams;
            });
          }}
          currentValue={formik.values.category}
        />
        <SelectRecommended
          name="recommended"
          currentValue={formik.values.recommended}
          dataFunc={(option) => {
            //  formik.handleSubmit()
            formik.setFieldValue('recommended', option.value);
            setSearchParams((prevSearchParams) => {
              const updatedParams = new URLSearchParams(prevSearchParams);
              updatedParams.set('recommended', option.value);
              return updatedParams;
            });
          }}
        />
      </div>
      <p className="filter-1440">Filter</p>
    </StyledForm>
  );
};

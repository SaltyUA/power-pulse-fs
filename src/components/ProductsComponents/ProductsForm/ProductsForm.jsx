import { useMemo, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { SelectCategory } from '../FormSelects/CategoriesSelect';
import { SelectRecommended } from '../FormSelects/RecommendedSelect';
import { StyledForm, StyledSearchSvg, StyledxSvg } from './ProductsFrom.styled';
import { useDispatch } from 'react-redux';
import { setPageStore } from '../../../store/products/sliceProducts';
export const ProductsForm = () => {
  const [isCrossShown, setIsCrossShown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { search, category, recommended } = params;
 
  useEffect(() => {
    // if (!search && !category && !recommended) return;
    // const newSearch = {
    //   ...(search !== undefined && { search }),
    // ...(category !== undefined && { category }),
    // ...(recommended !== undefined && { recommended }),
    // }
    // setSearchParams((prevSearchParams) => {
    //           const updatedParams = new URLSearchParams(prevSearchParams);
    //           updatedParams.set('bloodType', '1');
    //           return updatedParams;
    //         });
    
}, [search, category, recommended, setSearchParams])

  const formik = useFormik({
    initialValues: {
      search: search ?? '',
      category: category ?? '',
      recommended: recommended ?? 'All',
    },
    onSubmit: (values) => {
      const { search } = values;
      if (search) {
        dispatch(setPageStore(1))
        setSearchParams((prevSearchParams) => {
          const updatedParams = new URLSearchParams(prevSearchParams);
          updatedParams.set('q', search);
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
            dispatch(setPageStore(1))
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
           dispatch(setPageStore(1))
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

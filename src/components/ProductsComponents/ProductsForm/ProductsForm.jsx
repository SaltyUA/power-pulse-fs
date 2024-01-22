import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { SelectCategory, SelectRecommended } from '../../ProductsComponents';
import { StyledForm, StyledSearchSvg, StyledxSvg } from './ProductsFrom.styled';
import sprite from '../../../assets/images/sprite.svg';

export const ProductsForm = () => {
  const [isCrossShown, setIsCrossShown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { q, category, recommended } = params;
  const formik = useFormik({
    initialValues: {
      search: q ?? '',
      category: category ?? '',
      recommended: recommended ?? 'All',
    },
    onSubmit: (values) => {
      const { search } = values;
      if (search) {
        setSearchParams((prevSearchParams) => {
          const updatedParams = new URLSearchParams(prevSearchParams);
          updatedParams.set('q', search);
          return updatedParams;
        });
      } else {
        setSearchParams((prevSearchParams) => {
          const updatedParams = new URLSearchParams(prevSearchParams);
          updatedParams.delete('q');
          return updatedParams;
        });
      }
    },
  });

  const handleInputChange = (event) => {
    setIsCrossShown(true);
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
          {isCrossShown && (
            <button
              type="button"
              onClick={() => {
                setIsCrossShown(false);
                setSearchParams((prevSearchParams) => {
                  const updatedParams = new URLSearchParams(prevSearchParams);
                  updatedParams.delete('q');
                  return updatedParams;
                });
                formik.values.search = '';
              }}
            >
              <StyledxSvg>
                <use href={sprite + '#icon-close'}></use>
              </StyledxSvg>
            </button>
          )}
          <button type="submit">
            <StyledSearchSvg>
              <use href={sprite + '#searchSvg'}></use>
            </StyledSearchSvg>
          </button>
        </div>
      </div>

      <div className="selects-block">
        <SelectCategory
          name="category"
          dataFunc={(option) => {
            formik.setFieldValue('category', option.value);
            setSearchParams((prevSearchParams) => {
              const updatedParams = new URLSearchParams(prevSearchParams);
              if (option.value === 'Categories') {
                updatedParams.delete('category');
                return updatedParams;
              }
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
            formik.setFieldValue('recommended', option.value);
            setSearchParams((prevSearchParams) => {
              const updatedParams = new URLSearchParams(prevSearchParams);
              if (option.value === 'All') {
                updatedParams.delete('recommended');
                return updatedParams;
              }
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

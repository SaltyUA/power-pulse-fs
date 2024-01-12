import { useFormik } from 'formik';
import { SelectCategory } from '../FormSelects/CategoriesSelect';
import { SelectRecommended } from '../FormSelects/RecommendedSelect';
import { StyledForm, StyledSearchSvg, StyledxSvg } from './ProductsFrom.styled';

export const ProductsForm = () => {
  
    const formik = useFormik({
     initialValues: {
       search: '',
       category: '',
       recommended: 'All',
     },
     onSubmit: values => {
       console.log(values);
        },
     
   });
   return (
     <StyledForm onSubmit={formik.handleSubmit}>
       <div className='input-search-block'>
          <input
         id="search"
         name="search"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.search}
         placeholder='Search'
       />
       <div className='svgs-search-block'>
           <StyledxSvg />
                        <button type="submit"><StyledSearchSvg/></button>
                 </div>
       </div>     
      
       <div className='selects-block'>
           <SelectCategory
         name="category"
         dataFunc={option => {
           formik.setFieldValue('category', option.value)
           formik.handleSubmit()
         }}
         currentValue={formik.values.category}
       />
       <SelectRecommended
         name="recommended"
         dataFunc={option => {
           formik.setFieldValue('recommended', option.value)
           formik.handleSubmit()
         }}
         currentValue={formik.values.recommended}
       />
       </div>
     <p className="filter-1440">Filter</p>
     </StyledForm>
   );
}
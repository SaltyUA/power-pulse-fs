import {  useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProductsForm } from '../../components/ProductsComponents/ProductsForm/ProductsForm';
import { ProductsList } from '../../components/ProductsComponents/ProductsList/ProductsList';
import { StyledSection, StyledWrapper, Title } from './Products.styled';
 import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
const Products = () => {
  const { addProductFalse } = useSelector(state => state.products)

  useEffect(() => {
    if (addProductFalse) {
    toast.error('Enter correct data!', {
position: "top-center",
autoClose: 2500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
}); 
    }
  }, [addProductFalse])

  return (
    <StyledSection>
      <StyledWrapper>
        <div className="title-form-block">
          <Title>Products</Title>
          <ProductsForm />
             </div>
         <ProductsList />
        <ToastContainer />
      </StyledWrapper>
    </StyledSection>
   
  )
};

export default Products;

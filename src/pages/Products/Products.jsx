import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProductsForm } from '../../components/ProductsComponents/ProductsForm/ProductsForm';
import { ProductsList } from '../../components/ProductsComponents/ProductsList/ProductsList';
import { StyledSection, StyledWrapper, Title } from './Products.styled';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../hooks/tostify';

const Products = () => {
  const { addProductFalse } = useSelector((state) => state.products);

  useEffect(() => {
    if (addProductFalse) {
      notify('error', 'Enter correct data!');
    }
  }, [addProductFalse]);

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
  );
};

export default Products;

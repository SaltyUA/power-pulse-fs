import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ProductsForm, ProductsList } from '../../components/ProductsComponents';
import { getCategoriesList } from '../../store/products/operations';
import { StyledSection, StyledWrapper, Title } from './Products.styled';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../hooks/tostify';
import { PageAnimatedWrapper } from '../../components/AnimatedPage/PageAnimatedWrapper';
const Products = () => {
  const { addProductFalse } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesList());
    if (addProductFalse) {
      notify('error', 'Enter correct data!');
    }
  }, [addProductFalse, dispatch]);

  return (
    <PageAnimatedWrapper direction='X'>
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
      </PageAnimatedWrapper>
  );
};

export default Products;

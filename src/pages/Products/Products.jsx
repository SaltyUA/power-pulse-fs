import { ProductsForm } from '../../components/ProductsComponents/ProductsForm/ProductsForm';
import { ProductsList } from '../../components/ProductsComponents/ProductsList/ProductsList';
import { StyledSection, StyledWrapper, Title } from './Products.styled';

const Products = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <div className="title-form-block">
          <Title>Products</Title>
          <ProductsForm />
             </div>
                  <ProductsList />
      </StyledWrapper>
    </StyledSection>
   
  )
};

export default Products;

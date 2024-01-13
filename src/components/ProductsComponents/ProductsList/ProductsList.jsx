import { StyledList } from './ProductsList.styled';
import { ProductsPlaceholder } from './ProductsPlaceholder/ProductsPlaceholder';
import { ProductsListItem } from './ProductsListItem/ProductsListItem';
import { data } from './data';

export const ProductsList = () => {
  return data.length > 0 ? (
    <StyledList>
      {data.map((item) => (
        <ProductsListItem key={item.id} data={item} />
      ))}
    </StyledList>
  ) : (
    <ProductsPlaceholder/>
  );
};

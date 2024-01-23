import {
  DayProductsArea,
  TitleArea,
  Title,
  TableArea,
  Message,
  TableHeader,
  List,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
} from './DayProducts.styled';
import { AddButton } from '../AddButton/AddButton';

import { nanoid } from 'nanoid';

import ProductItem from './ProductItem/ProductItem';

import { useNavigate } from 'react-router-dom';

const DayProducts = ({ consumedProducts }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/products');
  };

  return (
    <DayProductsArea
      dimentionArea={
        consumedProducts && consumedProducts.length > 0 ? 'true' : 'false'
      }
    >
      <TitleArea>
        <Title>Products</Title>
        <AddButton onClick={() => handleClick()}>Add</AddButton>
      </TitleArea>
      <TableArea>
        {consumedProducts && consumedProducts.length > 0 ? (
          <>
            <TableHeader>
          <Grid1>Title</Grid1>
          <Grid2>Category</Grid2>
          <Grid3>Calories</Grid3>
          <Grid4>Weight</Grid4>
          <Grid5>Recommend</Grid5>
          <Grid6></Grid6>
            </TableHeader>
             <List
          dimentionList={
          consumedProducts && consumedProducts.length > 0
          ? 'true'
          : 'false'
        }>
          {consumedProducts.map((item) => (
            <ProductItem key={nanoid()} {...item} />
          ))}
            </List>

          </>
                      ) : (
              <Message>Not found products</Message>
      )}
        

      </TableArea>
    </DayProductsArea>
  );
};

export default DayProducts;
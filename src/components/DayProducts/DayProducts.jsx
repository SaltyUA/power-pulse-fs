import {
  DayProductsArea,
  TitleArea,
  Title,
  Button,
  Add,
  ArrowIcon,
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
import sprite from '../../assets/images/sprite.svg';

import { nanoid } from 'nanoid';

import ProductItem from './ProductItem/ProductItem';

import { useNavigate } from 'react-router-dom';

const DayProducts = ({ consumedProducts }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/products');
  };

  return (
    <DayProductsArea>
      <TitleArea>
        <Title>Products</Title>
        <Button onClick={() => handleClick()}>
          <Add>Add product</Add>
          <ArrowIcon iconColor="#E6533C">
            <use href={`${sprite}#icon-start-arrow`} />
          </ArrowIcon>
        </Button>
      </TitleArea>
      <TableArea>
        <TableHeader>
          <Grid1>Title</Grid1>
          <Grid2>Category</Grid2>
          <Grid3>Calories</Grid3>
          <Grid4>Weight</Grid4>
          <Grid5>Recommend</Grid5>
          <Grid6></Grid6>
        </TableHeader>

      </TableArea>
      {consumedProducts && consumedProducts.length > 0 ? (
        <List>
          {consumedProducts.map((item) => (
            <ProductItem key={nanoid()} {...item} />
          ))}
        </List>
      ) : (
        <Message>Not found products</Message>
      )}
    </DayProductsArea>
  );
};

export default DayProducts;
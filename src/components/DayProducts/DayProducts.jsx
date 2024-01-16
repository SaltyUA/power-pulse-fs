import {
  DayProductsArea,
  TitleArea,
  Title,
  Button,
  Add,
  ArrowIcon,
  TableArea,
  // Message,
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
import ProductItem from './ProductItem/ProductItem';


const DayProducts = () => {

  return (
    <DayProductsArea>
      <TitleArea>
        <Title>Products</Title>
        <Button>
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
        
                {/* <Message>Not found products</Message> */}
      </TableArea>


  <List>
    <ProductItem
    title={"title"}
    category={"category"}
    caloriesConsumed={100}
    weightConsumed={100}
    groupBloodNotAllowed={true}
    />
    <ProductItem
    title={"title"}
    category={"category"}
    caloriesConsumed={100}
    weightConsumed={100}
    groupBloodNotAllowed={true}
    />

    </List>

    </DayProductsArea>
  );
};

export default DayProducts;
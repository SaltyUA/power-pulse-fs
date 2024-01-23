import {
  ProductDiv,
  Column,
  ButtonEl,
  DeleteIcon,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Title,
  Indicator,
  RecommendText,
  ShorterTitle,
} from './ProductItem.styled';
import sprite from '../../../assets/images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { delProductsDay } from '../../../store/diary/operationDiary';
import { getDateInfo } from '../../../store/diary/selectorsDiary';
import { selectUser } from '../../../store/selectors';


const ProductItem = ({ product, calories, amount }) => {
  const { blood } = useSelector(selectUser);
  
  const dateDel = useSelector(getDateInfo);
  const dispatch = useDispatch();
  const handleClick = (_id) => {
    dispatch(delProductsDay({ date: dateDel, id: _id }));
  };
  const isRecommended = product.groupBloodNotAllowed[blood];
  return (
    <ProductDiv key={product._id}>
      <Grid1>
        <Title>Title</Title>
        <Column>
          <ShorterTitle>{product.title}</ShorterTitle>
        </Column>
      </Grid1>
      <Grid2>
        <Title>Category</Title>
        <Column>
          <ShorterTitle>{product.category}</ShorterTitle>
        </Column>
      </Grid2>
      <Grid3>
        <Title>Calories</Title>
        <Column>{calories}</Column>
      </Grid3>
      <Grid4>
        <Title>Weight</Title>
        <Column>{amount}</Column>
      </Grid4>
      <Grid5>
        <Title>Recommend</Title>
        <Column>
          {isRecommended ? (
            <>
              <Indicator color="#419B09" />
              <RecommendText>Yes</RecommendText>
            </>
          ) : (
            <>
              <Indicator color="#E9101D" />
              <RecommendText>No</RecommendText>
            </>
          )}
        </Column>
      </Grid5>
      <Grid6>
        <Title></Title>
        <ButtonEl onClick={() => handleClick(product._id)}>
          <DeleteIcon iconColor="#EF8964">
            <use href={`${sprite}#icon-trash`} />
          </DeleteIcon>
        </ButtonEl>
      </Grid6>
    </ProductDiv>
  );
};

export default ProductItem;

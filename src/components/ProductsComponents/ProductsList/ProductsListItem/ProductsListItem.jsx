import {  useSelector } from 'react-redux';
import {
  StyledLiItem,
  StyledRecommendedSpan,
  StyledRunManSvg
} from './ProductsListItem.styled';
import sprite from '../../../../assets/images/sprite.svg';
import { AddButton } from '../../../AddButton/AddButton';

export const ProductsListItem = ({ data, handleOpenModal }) => {
  const { blood } = useSelector(state => state.auth.user);
  const { calories, category, title, weight, groupBloodNotAllowed, _id } = data;
  const recommended = groupBloodNotAllowed[blood];
  
  return (
    <StyledLiItem>
      <span className="diet-span">diet</span>
      <div className="recommended-addbtn-div">
        <StyledRecommendedSpan
          className="recommended-span"
          $color={recommended}
        >
          {recommended ? 'Recommended' : 'Not recommended'}
        </StyledRecommendedSpan>
        <AddButton onClick={() => handleOpenModal({calories,title,weight, _id}) }>Add</AddButton>
      </div>
      <div className="product-info-div">
        <div className="title-svg-div">
          <StyledRunManSvg>
            <use href={sprite + '#runningman'}></use>
          </StyledRunManSvg>
          <p className="product-info-div-title"> {title}</p>
        </div>
        <div className="detailed-info-div">
          <p className="detailed-name">
            Calories: <span className="detailed-data">{calories}</span>
          </p>
          <p className="detailed-name">
            Category: <span className="detailed-data">{category}</span>
          </p>
          <p className="detailed-name">
            Weight: <span className="detailed-data">{weight}</span>
          </p>
        </div>
      </div>
    </StyledLiItem>
  );
};

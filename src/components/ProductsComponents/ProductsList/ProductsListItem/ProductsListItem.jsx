import {
  StyledLiItem,
  StyledRecommendedSpan,
  StyledRunManSvg,
  StyledAddBtn,
  StyledBtnSpan,
  StyledArrowSvg23
} from './ProductsListItem.styled';
import sprite from '../../../../assets/images/sprite.svg';
const bloodType = '1';

export const ProductsListItem = ({ data, handleOpenModal}) => {
  const { calories, category, title, weight, groupBloodNotAllowed, _id } = data;
  const recommended = groupBloodNotAllowed[bloodType];
 
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
        <StyledAddBtn onClick={() => handleOpenModal({calories,title,weight, _id}) } type="button" className="add-btn">
          <StyledBtnSpan className="add-btn-span">Add</StyledBtnSpan>
          <StyledArrowSvg23>
            <use href={sprite + '#locationarrow'}></use>
          </StyledArrowSvg23>
                 </StyledAddBtn>
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

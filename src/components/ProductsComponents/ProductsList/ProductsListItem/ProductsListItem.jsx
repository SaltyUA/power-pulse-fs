import {
  StyledLiItem,
  StyledArrowSvg,
  StyledRecommendedSpan,
  StyledRunManSvg,
  StyledAddBtn,
  StyledBtnSpan,
} from './ProductsListItem.styled';

const bloodType = '1';

export const ProductsListItem = ({ data, handleModal }) => {
  const { calories, category, title, weight, groupBloodNotAllowed } = data;
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
        <StyledAddBtn onClick={() => handleModal({calories,title,weight}) } type="button" className="add-btn">
          <StyledBtnSpan className="add-btn-span">Add</StyledBtnSpan>
          <StyledArrowSvg />
        </StyledAddBtn>
      </div>
      <div className="product-info-div">
        <div className="title-svg-div">
          <StyledRunManSvg />
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

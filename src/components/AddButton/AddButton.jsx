import {
  StyledAddBtn,
  StyledBtnSpan,
  StyledArrowSvg23
} from './AddButton.styled';
import sprite from '../../assets/images/sprite.svg';
export const AddButton = ({children, onClick}) => {

    return (
         <StyledAddBtn type="button" onClick={onClick}>
            <StyledBtnSpan className="add-btn-span">{children}</StyledBtnSpan>
          <StyledArrowSvg23>
            <use href={sprite + '#locationarrow'}></use>
          </StyledArrowSvg23>
         
        </StyledAddBtn>
    )
}
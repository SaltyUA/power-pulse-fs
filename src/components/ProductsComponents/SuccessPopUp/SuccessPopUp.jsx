import { StyledBackdrop, StyledModal, StyledCloseSvg, StyledNavLink, StyledArrowSvg } from "./SuccessPopUp.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIsSuccessPopUpShown } from "../../../store/products/sliceProducts";
import sprite from '../../../assets/images/sprite.svg';

export const SuccessPopUp = () => {
    const { isSuccessPopUpShown } = useSelector(state => state.products);
    const dispatch = useDispatch()
    useEffect(() => {
    if (!isSuccessPopUpShown) return;
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        dispatch(setIsSuccessPopUpShown(false))
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
    }, [isSuccessPopUpShown, dispatch]);
    
    const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(setIsSuccessPopUpShown(false))
    }
  };
    return (
        isSuccessPopUpShown && <StyledBackdrop onClick={handleBackdropClick}>
        <StyledModal>
          <StyledCloseSvg onClick={()=>dispatch(setIsSuccessPopUpShown(false))}>
            <use href={sprite + '#icon-close'}></use>
          </StyledCloseSvg>
                {/* <StyledCloseSvg onClick={()=>dispatch(setIsSuccessPopUpShown(false))}/> */}
                <p className='title'>Well done</p>
                <p className="calories">Calories: <span className="calories-span">96</span></p>
                <button onClick={()=>dispatch(setIsSuccessPopUpShown(false))} className="button" type='button'>Next product</button>
                <StyledNavLink to='/diary'>To the diary <StyledArrowSvg>
            <use href={sprite + '#locationarrow'}></use>
          </StyledArrowSvg></StyledNavLink>
            </StyledModal>
        </StyledBackdrop>
    )
}
import { StyledBackdrop, StyledModal, StyledCloseSvg, StyledNavLink, StyledArrowSvg } from "./SuccessPopUp.styled";

export const SuccessPopUp = () => {

    return (
        <StyledBackdrop>
            <StyledModal>
                <StyledCloseSvg />
                <p className='title'>Well done</p>
                <p className="calories">Calories: <span className="calories-span">96</span></p>
                <button className="button" type='button'>Next product</button>
                <StyledNavLink to='/diary'>To the diary <StyledArrowSvg/></StyledNavLink>
            </StyledModal>
        </StyledBackdrop>
    )
}
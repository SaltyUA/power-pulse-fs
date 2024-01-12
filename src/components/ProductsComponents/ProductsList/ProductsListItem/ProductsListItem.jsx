import { StyledLiItem, StyledArrowSvg, StyledRecommendedSpan, StyledRunManSvg } from "./ProductsListItem.styled";

export const ProductsListItem = ({ data }) => {

    return (
        <StyledLiItem>
            <span className='diet-span'>diet</span>
            <div className='recommended-addbtn-div'>
                <StyledRecommendedSpan className='recommended-span' $color={data.recommended}>{data.recommended ? 'Recommended' : 'Not recommended' }</StyledRecommendedSpan>
<button type="button" className='add-btn'><span className='add-btn-span'>Add</span> <StyledArrowSvg/></button>
            </div>
            <div className='product-info-div'>
                <div className='title-svg-div'>
                    <StyledRunManSvg />
                    <p className='product-info-div-title'> {data.title}</p>
                </div>                
                <div className='detailed-info-div'>
                    <p className='detailed-name'>
                        Calories: <span className='detailed-data'>{data.call}</span>
                    </p>
                    <p className='detailed-name'>
                       Category: <span className='detailed-data'>{data.category}</span>
                    </p>
                    <p className='detailed-name'>
                       Weight: <span className='detailed-data'>{data.weight}</span>
                    </p>
                </div>
            </div>
        </StyledLiItem>
    )
}
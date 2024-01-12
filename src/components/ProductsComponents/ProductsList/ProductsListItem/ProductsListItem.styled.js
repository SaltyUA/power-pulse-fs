import styled from "@emotion/styled";
import { ReactComponent as ArrowSvg } from '../../img/arrow.svg';
import { ReactComponent as RunManSvg } from '../../img/runningman.svg';

export const StyledArrowSvg = styled(ArrowSvg)`
width: 16px;
height: 16px;
`

export const StyledRunManSvg = styled(RunManSvg)`
width: 24px;
height: 24px;
`

export const StyledLiItem = styled.li`
width: 100%;
max-width: 335px;
height: 141px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: rgba(239, 237, 232, 0.05);
position: relative;

.diet-span {
position: absolute;
top: 16px;
left: 16px;

color: #FFF;
font-family: Roboto;
font-size: 12px;
font-weight: 700;
border-radius: 4px;
background: rgba(239, 237, 232, 0.05);
padding: 5px 7.5px;
text-transform: uppercase;
}

.recommended-addbtn-div {
   
    position: absolute;
    align-items: center;
    top: 16px;
    right: 16px;
display: flex;
gap: 16px; 
}

.add-btn {
    display: flex;
     align-items: center;
    gap: 8px;
}

.add-btn-span {
   color: #E6533C;
font-family: Roboto;
line-height: 1.29;
}

.product-info-div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    bottom: 16px;
    left: 16px;
}

.title-svg-div {
display: flex;
gap: 16px;
}

.product-info-div-title {
overflow: hidden;
white-space: nowrap;
width:258px;
color: #EFEDE8;
font-feature-settings: 'clig' off, 'liga' off;
text-overflow: ellipsis;
font-family: Roboto;
font-size: 20px;
line-height: 1.2;
@media screen and (min-width: 1440px) {
    width:333px;
    }
}

.detailed-info-div {
    display: flex;
    gap: 16px;
}

.detailed-name {
    color: rgba(239, 237, 232, 0.40);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Roboto;
font-size: 12px;
line-height: 1.5;
}

.detailed-data {
    color: #EFEDE8;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Roboto;
font-size: 12px;
line-height: 1.5;
}

@media screen and (min-width: 1440px) {
    max-width: 405px;
    width: calc((100% - 16px) / 2);
}
`

export const StyledRecommendedSpan = styled.span`
 display: flex;
 gap: 8px;
    align-items: center;
    color: #EFEDE8;
font-family: Roboto;
font-size: 12px;
line-height: 1.5;

 &:before {
        content: '';
        width: 14px;
        height: 14px;
        border-radius: 10px;
        background-color: ${props => (props.$color ? '#419B09' : '#E9101D')};
        display: inline-block;
 }
 `
import styled from "@emotion/styled";
import { ReactComponent as SearchSvg } from '../img/searchSvg.svg'
import { ReactComponent as xSvg } from '../img/xSvg.svg'

export const StyledSearchSvg = styled(SearchSvg)`
width: 18px;
height: 18px;
`
export const StyledxSvg = styled(xSvg)`
width: 20px;
height: 20px;   
`
export const StyledForm = styled.form`
margin-top: 40px;
position: relative;
#search {
    max-width: 335px;
    width: 100%;
    border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.30);
padding: 14px;
background-color: inherit;
outline: none;

color: #EFEDE8;
font-family: Roboto;
line-height: 1.29;

&::placeholder {
        color: #EFEDE8;
    }

&:hover, &:focus {
    border-color: #E6533C;
}

   @media screen and (min-width: 768px) {
    width: 236px;
}


}

.input-search-block{
    position: relative
}

.svgs-search-block{
position: absolute;
top: 14px;
right: 14px;
display: flex;
gap: 8px;
}

.selects-block {
    display: flex;
    gap: 16px;
    margin-top: 16px;
    @media screen and (min-width: 768px) {
    margin-top: 0px;
}
}

@media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
}

   @media screen and (min-width: 1440px) {
    margin-top: 0px;
}

   @media screen and (max-width: 1440px) {
    .filter-1440 {
        display: none;
    }
   
}
 .filter-1440 {
        color: rgba(239, 237, 232, 0.50);
font-family: Roboto;
line-height: 1.29;
position: absolute;
right: 0px;
top: -20px;
    }
`
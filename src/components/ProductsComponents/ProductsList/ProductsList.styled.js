import styled from "@emotion/styled";

export const StyledList = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
margin-top: 40px;

@media screen and (win-width:768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
}
`
import styled from "@emotion/styled";

export const StyledList = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
margin-top: 40px;

@media screen and (min-width:768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    row-gap: 32px;
    height: 660px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #EF8964 rgba(239, 237, 232, 0.10);
   
    &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #EF8964;
             border-radius: 12px;
        }

        &::-webkit-scrollbar-track {
            background-color: rgba(239, 237, 232, 0.10);
            border-radius: 12px;
        }
}
@media screen and (min-width: 1440px) {
    width: 850px;
    height: 487px;
}
`
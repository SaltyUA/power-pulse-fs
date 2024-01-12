import { StyledList } from "./ProductsList.styled";
import { ProductsListItem } from "./ProductsListItem/ProductsListItem";
import { data } from "./data";

export const ProductsList = () => {

    return (
        <StyledList>
            {data.map(item => <ProductsListItem key={item.id} data={item} />)}
        </StyledList>
    )
}
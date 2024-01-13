import { StyledPlaceholderBlock } from './ProductsPlaceholder.styled';

export const ProductsPlaceholder = () => {
  return (
    <StyledPlaceholderBlock>
      <p className='above-text'>
        <span className='above-text-span'>Sorry, no results were found</span> for the product filters you
        selected. You may want to consider other search options to find the
        product you want. Our range is wide and you have the opportunity to find
        more options that suit your needs.
      </p>
      <p className='below-text'>Try changing the search parameters.</p>
    </StyledPlaceholderBlock>
  );
};

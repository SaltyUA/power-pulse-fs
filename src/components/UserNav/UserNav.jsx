import { NavContainer, StyledNavLink } from './UserNav.styled';

const UserNav = () => {
  return (
    <NavContainer>
      <StyledNavLink to={'/diary'}>Diary</StyledNavLink>
      <StyledNavLink to={'/products'}>Products</StyledNavLink>
      <StyledNavLink to={'/exercises'}>Exercises</StyledNavLink>
    </NavContainer>
  );
};

export default UserNav;

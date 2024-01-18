import { NavContainer, StyledNavLink } from './UserNav.styled';

const UserNav = ({ setBurgerIsActive }) => {
  const handleClick = () => {
    if (setBurgerIsActive) setBurgerIsActive(false);
  };

  return (
    <NavContainer>
      <StyledNavLink to={'/diary'} onClick={handleClick}>
        Diary
      </StyledNavLink>
      <StyledNavLink to={'/products'} onClick={handleClick}>
        Products
      </StyledNavLink>
      <StyledNavLink to={'/exercises'} onClick={handleClick}>
        Exercises
      </StyledNavLink>
    </NavContainer>
  );
};

export default UserNav;

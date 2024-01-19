import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  color: ${styleGuide.whiteColor};
  border: 1px solid ${styleGuide.navLinkColor};
  border-radius: 12px;
  padding: 10px 27px;

  &:is(:active, :hover) {
    border-color: ${styleGuide.whiteColor};
  }

  @media screen and (min-width: 768px) {
  }
`;

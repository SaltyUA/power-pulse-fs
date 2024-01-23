import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  z-index: 10;
  background-color: transparent;

  ${(props) =>
    props.$isLoggedIn
      ? 'border-bottom: 1px solid rgba(239, 237, 232, 0.2)'
      : 'position: absolute;'}
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 320px;
  padding: 24px 20px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 20px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 20px 96px;
  }
`;

export const HeaderLogo = styled(Link)`
  display: flex;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const IconLogo = styled.svg`
  width: 36px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 17px;
  }
`;

export const IconText = styled.svg`
  width: 82px;
  height: 12px;
  @media screen and (min-width: 768px) {
    width: 99.5px;
    height: 15px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const SettingsIcon = styled.svg`
  width: 24px;
  height: 24px;

  transition: scale ${styleGuide.animation};

  &:hover {
    transform: scale(0.8);
  }

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const AvatarFrame = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${styleGuide.orangeColor};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const UserAvatar = styled.img`
  width: 36px;
  height: 36px;

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;
export const BurgerButton = styled.button`
  transition: scale ${styleGuide.animation};

  &:hover {
    transform: scale(0.8);
  }
`;

export const BurgerIcon = styled.svg`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

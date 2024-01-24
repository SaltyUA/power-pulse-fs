import { Link } from 'react-router-dom';
import sprite from '../../assets/images/sprite.svg';
import {
  AvatarFrame,
  BurgerButton,
  BurgerIcon,
  HeaderContainer,
  HeaderLogo,
  HeaderWrap,
  IconLogo,
  IconText,
  SettingsIcon,
  UserAvatar,
  UserContainer,
} from './Header.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../store/selectors';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import LogoutButton from '../LogoutButton/LogoutButton';
import UserNav from '../UserNav/UserNav';

export const Header = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  const [burgerIsActive, setBurgerIsActive] = useState(false);

  useEffect(() => {
    setBurgerIsActive(false);
  }, []);

  const { avatarURL } = useSelector(selectUser);

  const width = window.innerWidth;

  return (
    <HeaderContainer $isLoggedIn={isLogged}>
      <HeaderWrap>
        <HeaderLogo to={'/'}>
          <IconLogo>
            {width > 767 ? (
              <use href={sprite + '#icon-logo'} />
            ) : (
              <use href={sprite + '#icon-logo-mob'} />
            )}
          </IconLogo>
          <IconText>
            {width > 767 ? (
              <use href={sprite + '#icon-logo-text'} />
            ) : (
              <use href={sprite + '#icon-logo-text-mob'} />
            )}
          </IconText>
        </HeaderLogo>
        {isLogged && (
          <UserContainer>
            {width >= 1440 && <UserNav />}
            <Link to={'/profile'}>
              <SettingsIcon>
                <use href={sprite + '#icon-settings'} />
              </SettingsIcon>
            </Link>
            <AvatarFrame>
              <UserAvatar src={avatarURL} />
            </AvatarFrame>
            {width < 1439 ? (
              <BurgerButton
                type="button"
                onClick={() => {
                  setBurgerIsActive(true);
                }}
              >
                <BurgerIcon>
                  <use href={sprite + '#icon-menu'} />
                </BurgerIcon>
              </BurgerButton>
            ) : (
              <LogoutButton />
            )}
          </UserContainer>
        )}
      </HeaderWrap>
      {width < 1439 && isLogged && (
        <BurgerMenu
          setBurgerIsActive={setBurgerIsActive}
          isActive={burgerIsActive}
        />
      )}
    </HeaderContainer>
  );
};

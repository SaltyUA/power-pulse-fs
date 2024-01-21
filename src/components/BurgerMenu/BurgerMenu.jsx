import LogoutButton from '../LogoutButton/LogoutButton';
import UserNav from '../UserNav/UserNav';
import {
  BurgerContainer,
  BurgerLogout,
  CloseButtonIcon,
  StyledCloseButton,
} from './BurgerMenu.styled';
import sprite from '../../assets/images/sprite.svg';

const BurgerMenu = ({ setBurgerIsActive, isActive }) => {
  return (
    <BurgerContainer className={isActive ? '' : 'isHidden'}>
      <StyledCloseButton
        type="button"
        onClick={() => {
          setBurgerIsActive(false);
        }}
      >
        <CloseButtonIcon>
          <use href={sprite + '#icon-close'} />
        </CloseButtonIcon>
      </StyledCloseButton>
      <UserNav setBurgerIsActive={setBurgerIsActive} />
      <BurgerLogout>
        <LogoutButton setBurgerIsActive={setBurgerIsActive} />
      </BurgerLogout>
    </BurgerContainer>
  );
};

export default BurgerMenu;

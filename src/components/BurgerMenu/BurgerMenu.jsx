import LogoutButton from '../LogoutButton/LogoutButton';
import UserNav from '../UserNav/UserNav';
import {
  BurgerContainer,
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
      <LogoutButton setBurgerIsActive={setBurgerIsActive} />
    </BurgerContainer>
  );
};

export default BurgerMenu;

import LogoutButton from '../LogoutButton/LogoutButton';
import UserNav from '../UserNav/UserNav';
import {
  BurgerContainer,
  BurgerLogout,
  CloseButtonIcon,
  StyledCloseButton,
} from './BurgerMenu.styled';
import sprite from '../../assets/images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/selectors';

const BurgerMenu = ({ setBurgerIsActive, isActive }) => {
  const user = useSelector(selectUser);
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
      {user.height && <UserNav setBurgerIsActive={setBurgerIsActive} />}
      <BurgerLogout>
        <LogoutButton setBurgerIsActive={setBurgerIsActive} />
      </BurgerLogout>
    </BurgerContainer>
  );
};

export default BurgerMenu;

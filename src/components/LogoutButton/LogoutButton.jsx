import { useDispatch } from 'react-redux';
import sprite from '../../assets/images/sprite.svg';
import { LogoutIcon, LogoutWrap } from './LogoutButton.styled';
import { logOut } from '../../store/auth/thunk';

const LogoutButton = ({ setBurgerIsActive }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (setBurgerIsActive) setBurgerIsActive(false);
    dispatch(logOut());
  };

  return (
    <LogoutWrap type="button" onClick={handleClick}>
      Logout
      <LogoutIcon>
        <use href={sprite + '#icon-logout'} />
      </LogoutIcon>
    </LogoutWrap>
  );
};

export default LogoutButton;

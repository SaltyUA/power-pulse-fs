import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-mob-1x.webp';

export const Header = () => {
  return (
    <Link to={'/'}>
      <img src={logo} alt="main logo" />
    </Link>
  );
};

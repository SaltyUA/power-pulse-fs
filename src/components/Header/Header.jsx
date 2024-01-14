import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-mob-1x.webp';
import { Container } from '../../App.styled';

export const Header = () => {
  return (
    <Container>
      <Link to={'/'}>
        <img src={logo} alt="main logo" />
      </Link>
    </Container>
  );
};

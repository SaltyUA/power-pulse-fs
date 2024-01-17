import {
  Title,
  ContainerBtn,
  Svgline,
  WelcomeContainer,
  TitleWrapper,
  ContainerWelcome,
} from './Welcome.styled';
import sprite from '../../assets/images/sprite.svg';
import { Statistics } from '../../components/Statistics/statistics';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../store/selectors';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      user.height ? navigate('/diary') : navigate('/profile');
    }
  }, [isLoggedIn, navigate, user.height]);

  return (
    <>
      <WelcomeContainer>
        <ContainerWelcome>
          <TitleWrapper>
            <Title>Transforming your body shape with Power Pulse</Title>
            <Svgline width={98} height={35}>
              <use href={sprite + '#icon-line'}></use>
            </Svgline>
          </TitleWrapper>
          <ContainerBtn>
            <Button to={'/signin'} as={Link}>
              Sign in
            </Button>
            <Button to={'/signup'} as={Link} transparent={true}>
              Sign up
            </Button>
          </ContainerBtn>
        </ContainerWelcome>
        <Statistics />
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

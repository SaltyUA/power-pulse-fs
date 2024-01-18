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

const Welcome = () => {
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

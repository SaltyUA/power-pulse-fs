import {
  Title,
  ContainerBtn,
  Svgline,
  WelcomeContainer,
  TitleWrapper,
  ContainerWelcome,
  BackgroundContainer,
} from './Welcome.styled';
import sprite from '../../assets/images/sprite.svg';
import { Statistics } from '../../components/Statistics/statistics';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <BackgroundContainer>
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
                Sign In
              </Button>
              <Button to={'/signup'} as={Link} transparent={true}>
                Sign Up
              </Button>
            </ContainerBtn>
          </ContainerWelcome>
          <Statistics />
        </WelcomeContainer>
      </BackgroundContainer>
    </>
  );
};

export default Welcome;

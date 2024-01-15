//import Button from '../../components/Button/Button';
import {
  Title,
  ContainerBtn,
  TransparentButton,
  FullfilledButton,
  Svgline,
  WelcomeContainer,
  TitleWrapper,
  ContainerWelcome,
} from './Welcome.styled';
import sprite from '../../assets/images/sprite.svg';
import { Statistics } from '../../components/Statistics/statistics';

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
            {/* <Button to={'/signin'} title="SignIn" /> */}
            <FullfilledButton to={'/signin'}> Sign in </FullfilledButton>
            <TransparentButton to={'/signup'}> Sign up </TransparentButton>
          </ContainerBtn>
        </ContainerWelcome>
        <Statistics />
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

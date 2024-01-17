import {
  Container,
  NotFoundTitle,
  NotFoundContainer,
  NotFoundText,
  NotFoundBtn,
  ImgContainer,
} from './ErrorPage.styled';
const ErrorPage = () => {
  return (
    <Container>
      <NotFoundContainer>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>
          Sorry, you have reached a page that we could not find. It seems that
          you are lost among the numbers and letters of our virtual space.
          Perhaps this page went on vacation or decided to disappear into
          another dimension. We apologize for this inconvenience.
        </NotFoundText>
        <NotFoundBtn>Go Home</NotFoundBtn>
      </NotFoundContainer>
      <ImgContainer></ImgContainer>
    </Container>
  );
};

export default ErrorPage;

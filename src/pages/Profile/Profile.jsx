import UserCard from '../../components/Profile/UserCard';
import UserForm from '../../components/Profile/UserForm';
import { PageAnimatedWrapper } from '../../components/AnimatedPage/PageAnimatedWrapper';
import { Title } from '../../components/TitlePage/TitlePage.styled';
import { Container } from '../Profile/Profile.styled';
import { ContainerProfileSettings } from '../Profile/Profile.styled';

const Profile = () => {
  return (
    <PageAnimatedWrapper direction="X">
      <Container>
        <Title>Profile Settings</Title>
        <ContainerProfileSettings>
          <UserCard />
          <UserForm />
        </ContainerProfileSettings>
      </Container>
    </PageAnimatedWrapper>
  );
};

export default Profile;

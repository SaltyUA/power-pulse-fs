import { TitlePage } from './Profile.styled';
import UserCard  from '../../components/Profile/UserCard';
import UserForm from '../../components/Profile/UserForm';
import { PageAnimatedWrapper } from '../../components/AnimatedPage/PageAnimatedWrapper';

const Profile = () => {
  return (
    <PageAnimatedWrapper direction='X'>
    <div>
      <TitlePage>Profile Settings</TitlePage>
      <UserCard />
      <UserForm />
    </div>
    </PageAnimatedWrapper>

  );
};

export default Profile;

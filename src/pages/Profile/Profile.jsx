import { TitlePage } from './Profile.styled';
import UserCard  from '../../components/Profile/UserCard';
import UserForm  from '../../components/Profile/UserForm';

const Profile = () => {
  return (
    <div>
      <TitlePage>Profile Settings</TitlePage>
      <UserCard />
      <UserForm />
    </div>
  );
};

export default Profile;

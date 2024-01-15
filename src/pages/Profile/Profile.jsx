import { TitlePage } from './Profile.styled';
import  UserCard  from '../../components/Profile/UserCard';
import { UserForm } from '../../components/Profile/UserForm';

const Profile = () => {
  return (
    <>
      <TitlePage>Profile Settings</TitlePage>
      <UserCard />
      <UserForm />
    </>
  );
};

export default Profile;

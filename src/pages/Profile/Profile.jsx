import { TitlePage } from './Profile.styled';
import UserCard from '../../components/Profile/UserCard';
import UserForm from '../../components/Profile/UserForm';
import { ContainerWrapper } from '../../components/Container/Container.styled';
import { ProfilerWrapper, WrapperContent, WrapperForm } from './Profile.styled';

const Profile = () => {
  return (
    <ContainerWrapper>
      <ProfilerWrapper>
        <TitlePage>Profile Settings</TitlePage>
        <WrapperContent>
          <UserCard />
          <WrapperForm>
            <UserForm />
          </WrapperForm>
        </WrapperContent>
      </ProfilerWrapper>
    </ContainerWrapper>
  );
};

export default Profile;

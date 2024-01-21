import { useRef } from 'react';
import { useDispatch } from 'react-redux';

// import { selectUser } from 'redux/selectors';
// import { updateAvatar } from 'redux/operations';
import { logOut } from '../../../store/auth/thunk';
import LogoutButton from '../../../components/LogoutButton/LogoutButton';
import Notice from '../../Notice/Notice';

import sprite from '../../../assets/images/sprite.svg';
import {
  UserCardContainer,
  NameContainer,
  EmailContainer,
  InformationContainer,
  InformationText,
  NoticeContainer,
  UserAvatar,
  LogoutContainer,
  AddAvatarButton,
  InformationCard,
  InformationCounter,
} from './UserCard.styled';

const UserCard = () => {
  const avatarURL = '';
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  // const [avatarURL, setAvatarURL] = useState(user.avatar);

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    console.log();
    // if (fileInputRef.current) {
    //   fileInputRef.current.click();
    // }
  };

  const handleAvatarChange = (event) => {
    console.log(event);
    //   const file = event.currentTarget.files[0];

    //   if (file) {
    //     setAvatarURL(URL.createObjectURL(file));
    //   }

    //   try {
    //     dispatch(updateAvatar(file));
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  const handleLogOut = () => dispatch(logOut());

  return (
    <UserCardContainer>
      <UserAvatar>
        {avatarURL ? (
          <img src={avatarURL} alt="User Avatar" />
        ) : (
          <svg width="61" height="62" fill="#efede8">
            <use href={`${sprite}#user`} />
          </svg>
        )}

        <form>
          <input
            hidden
            type="file"
            name="avatarURL"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleAvatarChange}
          />
          <AddAvatarButton onClick={handleIconClick}>
            <svg>
              <use href={`${sprite}#add`} />
            </svg>
          </AddAvatarButton>
        </form>
      </UserAvatar>
      {/* <p>{user.name}</p> */}
      <NameContainer>Name</NameContainer>
      <EmailContainer>User</EmailContainer>

      <InformationContainer>
        <InformationCard>
          <InformationText>
            <svg width="20" height="20" fill="#efede8">
              <use href={`${sprite}#food`} />
            </svg>
            Daily calorie intake
          </InformationText>
          <InformationCounter>0</InformationCounter>
        </InformationCard>
        <InformationCard>
          <InformationText>
            <svg width="20" height="20" fill="#efede8">
              <use href={`${sprite}#dumbbell`} />
            </svg>
            Daily physical activity
          </InformationText>
          <InformationCounter>0 min</InformationCounter>
        </InformationCard>
      </InformationContainer>

      <NoticeContainer>
        <Notice
          notice="We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals."
        />
      </NoticeContainer>
      <LogoutContainer onClick={handleLogOut}>
        <LogoutButton />
      </LogoutContainer>
    </UserCardContainer>
  );
};

export default UserCard;

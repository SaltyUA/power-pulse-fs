import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { selectUser } from '../../../store/selectors';

import { updateUserAvatar } from '../../../store/auth/thunk';
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
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [avatar, setAvatar] = useState(user.avatarURL);

  const fileInputRef = useRef(null);

  const handleIconClick = (e) => {
    e.preventDefault();

    console.log();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAvatarChange = async (event) => {
    const file = event.currentTarget.files[0];

    if (file) {
      setAvatar(URL.createObjectURL(file));
    }

    try {
      await dispatch(updateUserAvatar(file));
    } catch (error) {
      console.log("Error updating avatar:", error);
    }
  };

  const handleLogOut = () => dispatch(logOut());

  return (
    <UserCardContainer>
      <UserAvatar>
        {avatar ? (
          <img src={avatar} alt="User Avatar" />
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
      <NameContainer>{user.name}</NameContainer>
      <EmailContainer>User</EmailContainer>

      <InformationContainer>
        <InformationCard>
          <InformationText>
            <svg width="20" height="20" fill="#efede8">
              <use href={`${sprite}#food`} />
            </svg>
            Daily calorie intake
          </InformationText>
          <InformationCounter>{user.dailyCalories}</InformationCounter>
        </InformationCard>
        <InformationCard>
          <InformationText>
            <svg width="20" height="20" fill="#efede8">
              <use href={`${sprite}#dumbbell`} />
            </svg>
            Daily physical activity
          </InformationText>
          <InformationCounter>{user.dailySportTime} min</InformationCounter>
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

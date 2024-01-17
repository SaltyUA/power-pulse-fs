import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { selectUser } from 'redux/selectors';
// import { updateAvatar } from 'redux/operations';
import { logOut } from '../../../store/auth/thunk';

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
    <div className="containerSection">
      <div className="containerAvatar">
        {avatarURL ? (
          <img src={avatarURL} alt="User Avatar" />
        ) : (
          <svg>
            <use href=""></use>
          </svg>
        )}
      </div>

      <form>
        <input
          type="file"
          name="avatarURL"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleAvatarChange}
        />
        <div className="icon-upload" onClick={handleIconClick}>
          <svg>
            <use href=""></use>
          </svg>
        </div>
      </form>

      {/* <p>{user.name}</p> */}
      <p>Name</p>
      <p>User</p>

      <div className="containerStatistic">
        <div className="daily_calorie">
          <svg>
            <use></use>
          </svg>
          <p>Daily calorie intake</p>
          <p>100</p>
        </div>
        <div className="daily_physical">
          <svg>
            <use></use>
          </svg>
          <p>Daily physical activity</p>
          <p>110 min</p>
        </div>
      </div>

      <div className="text_under_statistic">
        <svg>
          <use></use>
        </svg>
        <p>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>
      </div>

      <button onClick={handleLogOut} style={{ color: 'white' }}>
        <p>Log out</p>
        <svg>
          <use></use>
        </svg>
      </button>
    </div>
  );
};

export default UserCard;

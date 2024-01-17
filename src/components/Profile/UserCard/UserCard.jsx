import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/selectors';
import { updateAvatar } from 'redux/operations';

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [avatarURL, setAvatarURL] = useState(user.avatar);

//   const handleIconClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

  const handleAvatarChange = (event) => {
      setAvatarURL(URL.createObjectURL(event.currentTarget.files[0]));
      
      try {
        dispatch(updateAvatar())
      } catch (error) {
        
      }
  };

  return (
    <div>
      <p></p>
    </div>
  );
};

export default UserCard;

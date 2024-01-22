import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, IconSvg } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import sprite from '../../assets/images/sprite.svg';
import { FormInput } from '../Profile/UserForm/UserForm.styled';

const StyledDatepicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <>
      <div style={{ position: 'relative', cursor: 'pointer' }}>
        <IconSvg width="18" height="18">
          <use href={`${sprite}#icon-calendar`}></use>
        </IconSvg>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          customInput={<FormInput />}
          dateFormat={'dd.MM.yyyy'}
          calendarStartDay={1}
          formatWeekDay={(day) => day.substring(0, 1)}
        />

        <CalendarGlobalStyles />
      </div>
    </>
  );
};

export default StyledDatepicker;

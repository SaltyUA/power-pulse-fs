import { useState, useEffect, forwardRef } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  calendarGlobalStyles,
  TitleWrapper,
  CalendarIcon,
} from './Datepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../../assets/images/sprite.svg';
import { Global } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { setDayInfo } from '../../../store/diary/sliceDiary';

const StyledDatepicker = ({ selectedDate, setSelectedDate }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(setDayInfo(format(selectedDate, 'dd-MM-yyyy')));
  });  
  const onClickOutside = e => {
  if (e.target.tagName.toLowerCase() === 'button') return;
  setIsOpen(false)
}
  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <TitleWrapper
        onClick={() => {
        setIsOpen(!isOpen)
        onClick()
      }
      } ref={ref}>
        {format(selectedDate, 'dd/MM/yyyy')}
        <CalendarIcon iconColor="#EF8964">
          <use href={`${sprite}#calendar`} />
        </CalendarIcon>
      </TitleWrapper>
    );
  });

  return (
    <>
      <Global styles={calendarGlobalStyles} />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        open={isOpen}
        onClickOutside={onClickOutside}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substring(0, 1)}
        // minDate={user.createdAt ? createdDate : Date.now()}
        maxDate={Date.now()}
      />
    </>
  );
};

export default StyledDatepicker;

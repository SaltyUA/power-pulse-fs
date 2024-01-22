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

const StyledDatepicker = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(Date.now());
  useEffect(() => {
    dispatch(setDayInfo(format(selectedDate, 'dd-MM-yyyy')));
  });
  // useEffect(() => {
  //   onChoiceDate(format(selectedDate, 'dd-MM-yyyy'));
  // });

  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd/MM/yyyy')}
        <CalendarIcon iconColor="#EF8964">
          <use href={`${sprite}#icon-calendar`} />
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

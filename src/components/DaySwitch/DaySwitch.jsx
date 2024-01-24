
import {
  DaySwitchArea,
  ArrowIcon,
  Button,
  ArrowArea,
} from './DaySwitch.styled';
import StyledDatepicker from './Datepicker/Datepicker';
import sprite from '../../assets/images/sprite.svg';
import { useState } from 'react';
import { subDays, addDays } from 'date-fns';



const DaySwitch = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  return (
    <DaySwitchArea>
      <StyledDatepicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <ArrowArea>
        <Button
          type="button"
          onClick={() => handleDateChange(subDays(selectedDate, 1))}
        >
          <ArrowIcon iconColor="#efede8">
            <use href={`${sprite}#icon-left`} />
          </ArrowIcon>
        </Button>
        <Button
          type="button"
          onClick={() => handleDateChange(addDays(selectedDate, 1))}
        >
          <ArrowIcon iconColor="#efede8">
            <use href={`${sprite}#icon-right`} />
          </ArrowIcon>
        </Button>
      </ArrowArea>
    </DaySwitchArea>
  );
};

export default DaySwitch;
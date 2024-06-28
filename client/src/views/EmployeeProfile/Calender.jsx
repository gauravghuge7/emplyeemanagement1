import {useEffect,useState} from 'react';
import React from 'react'
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import axios from 'axios'

dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'isSelected' && prop !== 'isHovered' && prop !== 'isInRange',
})(({ theme, isSelected, isHovered, isInRange, day }) => ({
  borderRadius: 0,
  ...(isSelected && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.main,
    },
  }),
  ...(isHovered && {
    backgroundColor: theme.palette.action.hover,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.action.hover,
    },
  }),
  ...(isInRange && {
    backgroundColor: theme.palette.primary.light,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.light,
    },
  }),
  ...(day.day() === 0 && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(day.day() === 6 && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
}));
function Day(props) {
  const { day, selectedDay, startDate, endDate, hoveredDay, ...other } = props;

  // eslint-disable-next-line react/prop-types
  const isInRange = day.isBetween(startDate, endDate, null, '[]');
  // eslint-disable-next-line react/prop-types
  const isSelected = day.isSame(startDate, 'day') || day.isSame(endDate, 'day');

  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={{ px: 2.5 }}
      disableMargin
      selected={false}
      isSelected={isSelected}
      isInRange={isInRange}
      isHovered={!isSelected && !isInRange && day.isSame(hoveredDay, 'day')}
    />
  );
}

export default function Calendar() {

  useEffect(() => {
    getEmployeeHistory();
  }, []);

  const [employeeHistory, setEmployeeHistory] = useState();
  const [startDate, setStartDate] = React.useState(dayjs(employeeHistory?.startDate));
  const [endDate, setEndDate] = React.useState(dayjs(employeeHistory?.endDate));


 

  const getEmployeeHistory = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
      const response = await axios.get("http://localhost:5200/api/v1/admin/getLeaveEmployee", config);
      console.log(response.data.data.at(-1));
      setStartDate(dayjs(response.data.data.at(-1).startDate))
      setEndDate(dayjs(response.data.data.at(-1).endDate))
    } catch (error) {
      console.error('Error fetching employee history:', error);
    }
  };



  return (
    <div className='pt-32  scale-[2] '>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={startDate}
          // onChange={handleDateChange}
          showDaysOutsideCurrentMonth
          displayWeekNumber
          slots={{ day: Day }}
          slotProps={{
            day: (ownerState) => ({
              selectedDay: startDate,
              startDate: startDate,
              endDate: endDate,


            }),
          }}
        />
      </LocalizationProvider>
    </div>
  );
}   
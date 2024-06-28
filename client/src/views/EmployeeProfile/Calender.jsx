




import React from 'react';
import { Calendar as ReactCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import "./Calendar.css"; // Custom CSS file for additional styling

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: 'Government Holiday',
    start: new Date(2024, 4, 24),
    end: new Date(2024, 4, 25),
    allDay: true,
    resource: 'holiday'
  },
  {
    title: 'Annual Leave',
    start: new Date(2024, 0, 15),
    end: new Date(2024, 0, 15),
    allDay: true,
    resource: 'leave'
  },
  // Add more events as needed
];

function Calendar() {
  const eventPropGetter = (event) => {
    const backgroundColor = event.resource === 'holiday' ? 'red' :
                            event.resource === 'leave' ? 'lightblue' :
                            'lightgreen';
    return { style: { backgroundColor } };
  };

  const dayPropGetter = (date) => {
    const today = new Date();
    const isToday = today.toDateString() === date.toDateString();
    const day = date.getDay();
    const backgroundColor = isToday ? 'skyblue' : day === 0 ? '#F77979' : 'white';
    return {
      style: {
        backgroundColor
      }
    };
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md ">
      <h2 className="text-3xl font-bold mb-4 text-center">Employee Management Calendar</h2>
      <div className="h-96">
        <ReactCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['month']} // Only show month view
          toolbar={true}
          components={{
            toolbar: (props) => (
              <div className="flex justify-between items-center mb-4">
                <button onClick={() => props.onNavigate('PREV')} className="btn-custom">Back</button>
                <span className="text-lg font-bold">{props.label}</span>
                <button onClick={() => props.onNavigate('NEXT')} className="btn-custom">Next</button>
              </div>
            ),
          }}
          eventPropGetter={eventPropGetter}
          dayPropGetter={dayPropGetter}
        />
      </div>
    </div>
  );
}

export default Calendar;

import React from 'react';
import { Calendar as ReactCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      <div className="h-96">
        <ReactCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          eventPropGetter={(event) => {
            const backgroundColor = event.resource === 'holiday' ? 'red' :
                                    event.resource === 'leave' ? 'lightblue' :
                                    'lightgreen';
            return { style: { backgroundColor } };
          }}
        />
      </div>
    </div>
  );
}

export default Calendar;

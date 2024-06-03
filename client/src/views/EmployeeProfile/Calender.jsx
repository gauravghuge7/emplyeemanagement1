// import React from 'react';
// import { Calendar as ReactCalendar, dateFnsLocalizer } from 'react-big-calendar';
// import format from 'date-fns/format';
// import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startOfWeek';
// import getDay from 'date-fns/getDay';
// import enUS from 'date-fns/locale/en-US';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const locales = {
//   'en-US': enUS,
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const events = [
//   {
//     title: 'Government Holiday',
//     start: new Date(2024, 4, 24),
//     end: new Date(2024, 4, 25),
//     allDay: true,
//     resource: 'holiday'
//   },
//   {
//     title: 'Annual Leave',
//     start: new Date(2024, 0, 15),
//     end: new Date(2024, 0, 15),
//     allDay: true,
//     resource: 'leave'
//   },
//   // Add more events as needed
// ];

// function Calendar() {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Calendar</h2>
//       <div className="h-96">
//         <ReactCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 500 }}
//           eventPropGetter={(event) => {
//             const backgroundColor = event.resource === 'holiday' ? 'red' :
//                                     event.resource === 'leave' ? 'lightblue' :
//                                     'lightgreen';
//             return { style: { backgroundColor } };
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default Calendar;















import React from 'react';
import { Calendar as ReactCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./Calender.css"  // Custom CSS file for additional styling

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
    const day = date.getDay();
    return {
      style: {
        backgroundColor: day === 0 ? '#F77979' : 'white' // Highlight Sundays
      }
    };
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md bg-gradient-to-r from-blue-400 to-purple-400">
      <h2 className="text-3xl font-bold mb-4 text-center">Employee Management Calendar</h2>
      <div className="h-96">
        <ReactCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          eventPropGetter={eventPropGetter}
          dayPropGetter={dayPropGetter}
        />
      </div>
    </div>
  );
}

export default Calendar;

import { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { connect } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const MainCalendar = () => {
  // const dispatch = useAppDispatch();
  const [date, setDate] = useState(new Date());
  // const [errors, setErrors] = useState([]);

  return (
    <div className="container">
      <Calendar
        onChange={setDate}
        value={date}
        calendarType={'US'}
        // defaultActiveStartDate={new Date(2022, 8, 10)}
        // defaultValue={[new Date(2022, 8, 27), new Date(2022, 10, 30)]}
        // onClickDay={(day) => console.log(day)}
        // onDrillDown={(a) => console.log(a)}
        maxDate={new Date(2022, 9, 28)} //! prevent signing up
        minDate={new Date(2022, 7, 25)} //! prevent signing up
        selectRange={true}
      />
    </div>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  MainCalendar
);

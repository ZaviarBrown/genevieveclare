import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { connect } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';
import './Dev.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Test = () => {
  const [selected, setSelected] = useState(new Date());

  console.log(selected);

  return (
    <div className="container">
      <Calendar value={selected} onChange={setSelected} />
    </div>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  Test
);

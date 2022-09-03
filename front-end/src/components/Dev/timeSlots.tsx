import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { connect } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';

import './Dev.css';

const Dev = () => {
  const [errors, setErrors] = useState([] as string[]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    return setErrors([]);
  };
  return (
    <form className="form5" onSubmit={handleSubmit}>
      {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null}

      <div className="selection">
        What days/times are you most likely to book?
        <label>
          {' '}
          Monday <input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Tuesday <input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Wednesday <input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Thursday <input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Friday <input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Saturday <input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Sunday <input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Time <input type="time"></input>
        </label>
      </div>

      <button type="submit">Ready to go!</button>
    </form>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  Dev
);

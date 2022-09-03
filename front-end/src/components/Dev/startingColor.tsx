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
    <form className="form4" onSubmit={handleSubmit}>
      {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null}


      <div className="selection">
        What is your starting hair color?
        <label>
          {' '}
          Black/Dark Brown<input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Brown<input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Light Brown/Dark Blonde<input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Blonde<input type="checkbox"></input>
        </label>
        <label>
          {' '}
          Gray/White<input type="checkbox"></input>
        </label>
      </div>


      <button type="submit">Ready to go!</button>
    </form>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  Dev
);

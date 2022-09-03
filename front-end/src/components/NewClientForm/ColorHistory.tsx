import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { connect } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';

import './Dev.css';

const ColorHistory = () => {
  const [errors, setErrors] = useState([] as string[]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    return setErrors([]);
  };
  return (
    <form className="form2" onSubmit={handleSubmit}>
      {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null}
      <div className="selection">
        Have you had color before?
        <div className="checkBoxDiv">
          <label>
            {' '}
            Yes <input className="continue" type="checkbox"></input>
            <div className="showContinue">
              <label>
                {' '}
                How long ago? <input></input>
              </label>
              <label>
                {' '}
                Professionally <input type="checkbox"></input>
              </label>
              <label>
                {' '}
                At home <input type="checkbox"></input>
              </label>
            </div>
          </label>
          <label>
            {' '}
            No <input type="checkbox"></input>
          </label>
        </div>
      </div>


      <button type="submit">Ready to go!</button>
    </form>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  ColorHistory
);

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
    <form className="form1" onSubmit={handleSubmit}>
      {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null}
      <div className="selection">
        Which services do you see yourself using?
        <label>(Select all that you might want)</label>
        <div className="checkBoxDiv">
          <label>
            {' '}
            Haircuts
            <input type="checkbox"></input>
          </label>
          <label>
            {' '}
            Color<input type="checkbox"></input>
          </label>
          <label>
            {' '}
            Vivid<input type="checkbox"></input>
          </label>
        </div>
        <div className="checkBoxDiv">
          <label>
            {' '}
            Highlights/Balayage<input type="checkbox"></input>
          </label>
          <label>
            {' '}
            Toner/Gloss<input type="checkbox"></input>
          </label>
        </div>
      </div>{' '}
      <button type="submit">Ready to go!</button>
    </form>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  Dev
);

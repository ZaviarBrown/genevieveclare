import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { connect } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';

import './Dev.css';

interface ChemProps {
  name: string;
}

const ChemHair = (props: ChemProps) => {
  const [errors, setErrors] = useState([] as string[]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    return setErrors([]);
  };
  return (
    <form className="form3" onSubmit={handleSubmit}>
      {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null}

      <div className="selection">
        Have you had any chemical treatments done on your hair?
        <div className="checkBoxDiv">
          <label>
            {' '}
            Yes <input className="continue" type="checkbox"></input>
            <div className="showContinue">
              <label>
                Keratin Treatment <input type="checkbox"></input>
              </label>
              <label>
                {' '}
                Permanent waves <input type="checkbox"></input>
              </label>
              <label>
                {' '}
                Relaxers <input type="checkbox"></input>
              </label>
            </div>
          </label>
        </div>
        <label>
          {' '}
          No <input type="checkbox"></input>
        </label>
      </div>

      <button type="submit">Ready to go!</button>
    </form>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  ChemHair
);

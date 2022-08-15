import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { RootState, useAppDispatch } from '../../store/index';
import { User } from '../../CustomTypings';
import './NewUserForm.css';

const NewUserForm = ({ user }: { user: User | null }) => {
  const dispatch = useAppDispatch();

  const [errors, setErrors] = useState([] as string[]);

  // if (user) {
  //   return <Redirect to="/" />;
  // }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    return setErrors([]);
  };

  return (
    <form className="NewUserForm" onSubmit={handleSubmit}>
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
      </div>
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

      <div className="selection">
        Anything you'd like me to know?
        <label>
          {' '}
          <input></input>
        </label>
      </div>

      <div className="selection">
        {' '}
        Upload a photo of yourself if you want me to know what I'm working with!
        <input type="file"></input>
      </div>

      <button type="submit">Ready to go!</button>
    </form>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  NewUserForm
);

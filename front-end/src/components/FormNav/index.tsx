import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { connect } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';

import './FormNav.css';

const FormNav = () => {
  console.log(localStorage);
  /** Saving form data
   * Pass function to each prop to run on save
   * function runs and saves all state variables to local storage
   * Local storage can save on every change
   * Once form is complete, dispatch all info
   */
  return (
    <div className="container">
      <div className="nav">
        <button className="arrow">Back</button>
        <button className="arrow">Next</button>
      </div>
      <div className="content">yes</div>
      <div className="save">
        {/* This will be on individual questions */}
        <button className="arrow">Save</button>
      </div>
    </div>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  FormNav
);

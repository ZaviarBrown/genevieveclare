import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { connect } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';
import './Dev.css';
import {
  ServiceOptions,
  ColorHistory,
  ChemHair,
  StartingColor,
  TimeSlots,
  FunFacts,
  Upload,
} from '../NewClientForm';

const forms = [
  <ServiceOptions name="hello" />,
  <ColorHistory />,
  <ChemHair />,
  <StartingColor />,
  <TimeSlots />,
  <FunFacts />,
  <Upload />,
];

/** Saving form data
 * Pass function to each prop to run on save
 * function runs and saves all state variables to local storage
 * Local storage can save on every change
 *
 * Start with current local storage object
 * On page change, spread object and check for any new/updated info
 * Add all new to form object
 *
 * Once form is complete, dispatch all info
 *
 */

const Dev = () => {
  const [page, setPage] = useState(0);
  // const [formData, setFormData] = useState({});

  // console.log(otherLocal);

  const changePages = (num: number) => {
    const newNum = page + num;

    console.log(forms[2]);

    console.log(localStorage);

    if (newNum < forms.length && newNum >= 0) setPage(page + num);
    else newNum < 0 ? setPage(0) : setPage(forms.length - 1);
  };

  return (
    <div className="container">
      <div className="nav">
        <button className="arrow" onClick={() => changePages(-1)}>
          Back
        </button>
        <button className="arrow" onClick={() => changePages(1)}>
          Next
        </button>
      </div>
      <div className="content">{forms[page]}</div>
      <div className="save">
        {/* This will be on individual questions */}
        <button className="arrow">Save</button>
      </div>
    </div>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  Dev
);

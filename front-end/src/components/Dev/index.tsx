import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { connect } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';
import './Dev.css';
import {
  ServiceOptions,
  ColorHistory,
  ChemHair,
  CurrentColor,
  TimeSlots,
  FunFacts,
  Upload,
} from '../NewClientForm';

const forms = [
  <ServiceOptions name="ServiceOptions" />,
  <ColorHistory name="ColorHistory" />,
  <ChemHair name="ChemHair" />,
  <CurrentColor name="CurrentColor" />,
  <TimeSlots name="TimeSlots" />,
  <FunFacts name="FunFacts" />,
  // <Upload name="Upload" />,
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
  const [submit, setSubmit] = useState(false);
  // const [formData, setFormData] = useState({});

  // console.log(otherLocal);

  const changePages = (num: number) => {
    const newNum = page + num;

    if (newNum < forms.length && newNum >= 0) setPage(page + num);
    else newNum < 0 ? setPage(0) : setPage(forms.length - 1);
  };

  const checkStorage = () => {
    const pageName = forms[page].props.name;
    if (forms.length - 1 === page && localStorage[pageName]) setSubmit(true);
    if (localStorage[pageName]) changePages(1);
  };

  return (
    <div className="container">
      <div className="nav">
        <button className="arrow" onClick={() => changePages(-1)}>
          Back
        </button>
        <button className="arrow" onClick={checkStorage}>
          Next
        </button>
      </div>
      <div className="content">{forms[page]}</div>
      {submit ? (
        <div className="save">
          <button className="arrow">Save</button>
        </div>
      ) : null}
    </div>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  Dev
);

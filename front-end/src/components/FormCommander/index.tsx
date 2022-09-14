import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { connect } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';
import './FormCommander.css';
import {
  ServiceOptions,
  ColorHistory,
  ChemHair,
  CurrentColor,
  TimeSlots,
  FunFacts,
  Upload,
} from '../NewClientForm';

const NewClient = [
  <ServiceOptions name="ServiceOptions" />,
  <ColorHistory name="ColorHistory" />,
  <ChemHair name="ChemHair" />,
  <CurrentColor name="CurrentColor" />,
  <TimeSlots name="TimeSlots" />,
  <FunFacts name="FunFacts" />,
  // <Upload name="Upload" />,
];

// const Appointment = [
//   // Services
//   // Specifications
//   // ReadyCheck
//   // Calendar
// ];

const forms: any = {
  NewClient,
  // Appointment,
};

interface FCProps {
  name: string;
}

const FormCommander = (props: FCProps) => {
  const [page, setPage] = useState(0);
  const [submit, setSubmit] = useState(false);
  const form = forms[props.name];

  const changePages = (num: number) => {
    if (num < 0) setSubmit(false);
    const newNum = page + num;

    if (newNum < form.length && newNum >= 0) setPage(page + num);
    else newNum < 0 ? setPage(0) : setPage(form.length - 1);
  };

  const checkStorage = () => {
    const pageName = form[page].props.name;
    // TODO ReadyCheck - yes: next page, no: first page
    if (form.length - 1 === page && localStorage[pageName]) setSubmit(true);
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
      <div className="content">{form[page]}</div>
      {submit ? (
        <div className="save">
          {/* 
					Final page to handle submitting
					Eventually will be an edit screen
					 */}
          <button className="arrow">Save</button>
        </div>
      ) : null}
    </div>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  FormCommander
);

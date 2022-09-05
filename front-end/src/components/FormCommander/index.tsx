import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { connect } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';
import './FormCommander.css';
import {
  ServiceOptions,
  ColorHistory,
  ChemHair,
  StartingColor,
  TimeSlots,
  FunFacts,
  Upload,
} from '../NewClientForm';

const NewClient = [
  <ServiceOptions name="ServiceOptions" />,
  <ColorHistory name="ColorHistory" />,
  <ChemHair name="ChemHair" />,
  <StartingColor name="StartingColor" />,
  <TimeSlots name="TimeSlots" />,
  <FunFacts name="FunFacts" />,
  <Upload name="Upload" />,
];

const forms: any = {
  NewClient,
};

interface FCProps {
  name: string;
}

const FormCommander = (props: FCProps) => {
  const [page, setPage] = useState(0);
  const form = forms[props.name];

  const changePages = (num: number) => {
    const newNum = page + num;

    if (newNum < form.length && newNum >= 0) setPage(page + num);
    else newNum < 0 ? setPage(0) : setPage(form.length - 1);
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
      <div className="content">{form[page]}</div>
      <div className="save">
        {/* This will be on individual questions */}
        <button className="arrow">Save</button>
      </div>
    </div>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  FormCommander
);

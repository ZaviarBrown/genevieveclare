import { useEffect, useState } from 'react';
import { restoreLocal, saveLocal } from './utils';
import './Dev.css';

interface TimeProps {
  name: string;
}

const defaultState: any = {
  mon: false,
  tues: false,
  wed: false,
  thur: false,
  fri: false,
  sat: false,
  sun: false,
  time: '',
};

const TimeSlots = (props: TimeProps) => {
  // const [errors, setErrors] = useState([] as string[]);
  const [formData, setFormData] = useState(defaultState);

  const setTime = (input: any) => {
    let newData: any = { ...formData };

    newData.time = input;

    setFormData(newData);
  };

  const toggle = (input: any) => {
    let newData: any = { ...formData };

    newData[input.name] = !newData[input.name];

    setFormData(newData);
  };

  useEffect(() => restoreLocal(props.name, setFormData), [props.name]);

  useEffect(() => {
    saveLocal(defaultState, formData, props.name);
  }, [formData, props.name]);

  return (
    <form className="form5">
      {/* {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null} */}

      <div className="selection">
        What days/times are you most likely to book?
        <label>
          {' '}
          Monday{' '}
          <input
            type="checkbox"
            name="mon"
            checked={formData.mon}
            onChange={(e) => toggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Tuesday{' '}
          <input
            type="checkbox"
            name="tues"
            checked={formData.tues}
            onChange={(e) => toggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Wednesday{' '}
          <input
            type="checkbox"
            name="wed"
            checked={formData.wed}
            onChange={(e) => toggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Thursday{' '}
          <input
            type="checkbox"
            name="thur"
            checked={formData.thur}
            onChange={(e) => toggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Friday{' '}
          <input
            type="checkbox"
            name="fri"
            checked={formData.fri}
            onChange={(e) => toggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Saturday{' '}
          <input
            type="checkbox"
            name="sat"
            checked={formData.sat}
            onChange={(e) => toggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Sunday{' '}
          <input
            type="checkbox"
            name="sun"
            checked={formData.sun}
            onChange={(e) => toggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Time{' '}
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={(e) => setTime(e.target.value)}
          ></input>
        </label>
      </div>
    </form>
  );
};

export default TimeSlots;

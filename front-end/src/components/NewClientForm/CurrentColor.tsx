import { useEffect, useState } from 'react';
import { restoreLocal, saveLocal } from '../utils';
import './Dev.css';

interface ColorProps {
  name: string;
}

const defaultState: any = {
  blackBrown: false,
  brown: false,
  brownBlonde: false,
  blonde: false,
  white: false,
  other: false,
  input: '',
};

const CurrentColor = (props: ColorProps) => {
  // const [errors, setErrors] = useState([] as string[]);
  const [formData, setFormData] = useState(defaultState);

  const setInput = (input: string) => {
    let newData: any = { ...formData };

    newData.input = input;

    setFormData(newData);
  };

  const singleToggle = (input: any) => {
    let newData: any = { ...defaultState };

    newData[input.name] = true;

    setFormData(newData);
  };

  useEffect(() => restoreLocal(props.name, setFormData), [props.name]);

  useEffect(() => {
    saveLocal(defaultState, formData, props.name, 'other');
  }, [formData, props.name]);

  return (
    <form className="form4">
      {/* {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null} */}

      <div className="selection">
        What is your current hair color?
        <label>
          {' '}
          Black/Dark Brown
          <input
            type="checkbox"
            name="blackBrown"
            checked={formData.blackBrown}
            onChange={(e) => singleToggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Brown
          <input
            type="checkbox"
            name="brown"
            checked={formData.brown}
            onChange={(e) => singleToggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Light Brown/Dark Blonde
          <input
            type="checkbox"
            name="brownBlonde"
            checked={formData.brownBlonde}
            onChange={(e) => singleToggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Blonde
          <input
            type="checkbox"
            name="blonde"
            checked={formData.blonde}
            onChange={(e) => singleToggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Gray/White
          <input
            type="checkbox"
            name="white"
            checked={formData.white}
            onChange={(e) => singleToggle(e.target)}
          ></input>
        </label>
        <label>
          {' '}
          Other (Please Specify)
          <input
            type="checkbox"
            name="other"
            checked={formData.other}
            onChange={(e) => singleToggle(e.target)}
          ></input>
          <input
            name="input"
            value={formData.input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </label>
      </div>
    </form>
  );
};

export default CurrentColor;

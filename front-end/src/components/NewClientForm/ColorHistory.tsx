import { useEffect, useState } from 'react';

import './Dev.css';
import { hasChanged } from './utils';

interface HistoryProps {
  name: string;
}

const defaultState: any = {
  yes: false,
  no: false,
  ago: '',
  prof: false,
  home: false,
};

const defaultLocation: any = {};

const ColorHistory = (props: HistoryProps) => {
  const [errors, setErrors] = useState([] as string[]);
  const [formData, setFormData] = useState(defaultState);

  useEffect(() => {
    if (localStorage.ColorHistory) {
      setFormData(JSON.parse(localStorage.ColorHistory));
    }
  }, []);

  useEffect(() => {
    let testData = { ...formData };
    testData.yes = false;
    if (hasChanged(defaultState, testData))
      localStorage.ColorHistory = JSON.stringify(formData);
    else localStorage.removeItem('ColorHistory');
  });

  const setAgo = (input: string) => {
    let newData: any = { ...formData };

    newData.ago = input;

    setFormData(newData);
  };

  const toggle = (input: any) => {
    let newData: any = { ...formData };
    newData[input.name] = !newData[input.name];

    if (newData.no === newData.yes && newData.no !== false) {
      input.name === 'yes' ? (newData.no = false) : (newData.yes = false);
    }

    setFormData(newData);
  };

  return (
    <form className="form2">
      {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null}
      <div className="selection">
        Have you had color before?
        <div className="checkBoxDiv">
          <label>
            {' '}
            Yes{' '}
            <input
              type="checkbox"
              name="yes"
              checked={formData.yes}
              onChange={(e) => toggle(e.target)}
            ></input>
          </label>
          <label>
            {' '}
            No{' '}
            <input
              type="checkbox"
              name="no"
              checked={formData.no}
              onChange={(e) => toggle(e.target)}
            ></input>
          </label>
        </div>
        {formData.yes === false ? null : (
          <div className="yesDiv">
            <div className="showContinue">
              <label>
                {' '}
                How long ago?{' '}
                <input
                  name="ago"
                  value={formData.ago}
                  onChange={(e) => setAgo(e.target.value)}
                ></input>
              </label>
              <label>
                {' '}
                Professionally{' '}
                <input
                  type="checkbox"
                  name="prof"
                  checked={formData.prof}
                  onChange={(e) => toggle(e.target)}
                ></input>
              </label>
              <label>
                {' '}
                At home{' '}
                <input
                  type="checkbox"
                  name="home"
                  checked={formData.home}
                  onChange={(e) => toggle(e.target)}
                ></input>
              </label>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default ColorHistory;

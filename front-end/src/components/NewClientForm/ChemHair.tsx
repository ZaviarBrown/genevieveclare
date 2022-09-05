import { useEffect, useState } from 'react';
import { restoreLocal, saveLocal } from './utils';
import './Dev.css';

interface ChemProps {
  name: string;
}

const defaultState: any = {
  yes: false,
  no: false,
  keratin: false,
  waves: false,
  relaxers: false,
};

const ChemHair = (props: ChemProps) => {
  // const [errors, setErrors] = useState([] as string[]);
  const [formData, setFormData] = useState(defaultState);

  const toggle = (input: any) => {
    let newData: any = { ...formData };
    newData[input.name] = !newData[input.name];

    if (newData.no === newData.yes && newData.no !== false) {
      input.name === 'yes' ? (newData.no = false) : (newData.yes = false);
    }

    setFormData(newData);
  };

  useEffect(() => restoreLocal(props.name, setFormData), [props.name]);

  useEffect(() => {
    let testData = { ...formData };
    testData.yes = false;
    saveLocal(defaultState, testData, props.name);
  }, [formData, props.name]);

  return (
    <form className="form3">
      {/* {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null} */}

      <div className="selection">
        Have you had any chemical treatments done on your hair?
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
          </label>
        </div>
        {formData.yes === false ? null : (
          <div className="showContinue">
            <label>
              Keratin Treatment{' '}
              <input
                type="checkbox"
                name="keratin"
                checked={formData.keratin}
                onChange={(e) => toggle(e.target)}
              ></input>
            </label>
            <label>
              {' '}
              Permanent waves{' '}
              <input
                type="checkbox"
                name="waves"
                checked={formData.waves}
                onChange={(e) => toggle(e.target)}
              ></input>
            </label>
            <label>
              {' '}
              Relaxers{' '}
              <input
                type="checkbox"
                name="relaxers"
                checked={formData.relaxers}
                onChange={(e) => toggle(e.target)}
              ></input>
            </label>
          </div>
        )}
      </div>
    </form>
  );
};

export default ChemHair;

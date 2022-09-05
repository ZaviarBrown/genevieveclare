import { useEffect, useState } from 'react';
import { hasChanged } from './utils';
import './Dev.css';

interface ServiceProps {
  name: string;
}

const defaultState: any = {
  haircuts: false,
  color: false,
  vivid: false,
  hb: false,
  tg: false,
};

const ServiceOptions = (props: ServiceProps) => {
  const [errors, setErrors] = useState([] as string[]);
  const [formData, setFormData] = useState(defaultState);

  useEffect(() => {
    if (localStorage.ServiceOptions) {
      setFormData(JSON.parse(localStorage.ServiceOptions));
    }
  }, []);

  useEffect(() => {
    if (hasChanged(defaultState, formData))
      localStorage.ServiceOptions = JSON.stringify(formData);
    else localStorage.removeItem('ServiceOptions');
  }, [formData]);

  const toggle = (input: any) => {
    let newData: any = { ...formData };

    newData[input.name] = !newData[input.name];

    setFormData(newData);
  };

  return (
    <form className="form1">
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
            <input
              type="checkbox"
              name="haircuts"
              checked={formData.haircuts}
              onChange={(e) => toggle(e.target)}
            ></input>
          </label>
          <label>
            {' '}
            Color
            <input
              type="checkbox"
              name="color"
              checked={formData.color}
              onChange={(e) => toggle(e.target)}
            ></input>
          </label>
          <label>
            {' '}
            Vivid
            <input
              type="checkbox"
              name="vivid"
              checked={formData.vivid}
              onChange={(e) => toggle(e.target)}
            ></input>
          </label>
        </div>
        <div className="checkBoxDiv">
          <label>
            {' '}
            Highlights/Balayage
            <input
              type="checkbox"
              name="hb"
              checked={formData.hb}
              onChange={(e) => toggle(e.target)}
            ></input>
          </label>
          <label>
            {' '}
            Toner/Gloss
            <input
              type="checkbox"
              name="tg"
              checked={formData.tg}
              onChange={(e) => toggle(e.target)}
            ></input>
          </label>
        </div>
      </div>{' '}
    </form>
  );
};

export default ServiceOptions;

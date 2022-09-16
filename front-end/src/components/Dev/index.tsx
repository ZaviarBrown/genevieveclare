import { useState } from 'react';
import './Dev.css';
import { allServices, selections } from './utils';

const options = Object.keys(allServices);

const Dev = () => {
  const [formData, setFormData]: [any, any] = useState(allServices);

  const toggle = (input: any) => {
    const newData: any = { ...formData };
    const name = input.dataset.name;
    newData[name].select = !newData[name].select;
    input.className = formData[name].select ? 'selected' : 'notSelected';
    setFormData(newData);
  };

  return (
    <div className="choices">
      {options.map((type: any) => (
        <div
          id="choice"
          className="notSelected"
          key={type}
          data-name={type}
          onClick={(e) => toggle(e.target)}
        >
          {formData[type].name}
        </div>
      ))}
    </div>
  );
};

export default Dev;

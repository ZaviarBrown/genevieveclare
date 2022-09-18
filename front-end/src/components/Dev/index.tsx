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

  const lightService = (input: any) => {
    const lightArr = ['balayage', 'bleachTone', 'babyLights', 'highlights'];
    const name = input.dataset.name;

    if (input.className === 'cantSelect') return false;

    if (lightArr.includes(name)) {
      if (formData[name].select) {
        lightArr.forEach((el) => {
          if (el !== name) {
            const curr = document.querySelector(`[data-name="${el}"]`);
            if (curr) curr.className = 'notSelected';
          }
        });

        return true;
      } else {
        lightArr.forEach((el) => {
          if (el !== name) {
            const curr = document.querySelector(`[data-name="${el}"]`);
            if (curr) curr.className = 'cantSelect';
          }
        });

        return true;
      }
    }

    return true;
  };

  return (
    <div className="services">
      {options.map((type: any) => (
        <div
          id="option"
          className="notSelected"
          key={type}
          data-name={type}
          onClick={(e) => {
            if (lightService(e.target)) toggle(e.target);
          }}
        >
          {formData[type].name}
        </div>
      ))}
    </div>
  );
};

export default Dev;

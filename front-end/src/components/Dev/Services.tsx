import { useState } from 'react';
import './Dev.css';
import { allServices, selections } from '../utils';

const options = Object.keys(allServices);

const Services = () => {
  const [formData, setFormData]: [any, any] = useState(allServices);

  const toggle = (input: any) => {
    const newData: any = { ...formData };
    const name = input.dataset.name;
    newData[name].select = !newData[name].select;
    input.className = formData[name].select ? 'selected' : 'notSelected';
    setFormData(newData);
  };

  const lightService = (input: any) => {
    const name = input.dataset.name;

    if (input.className === 'cantSelect') return false;

    if (formData[name].disable) {
      formData[name].disable.forEach((el: string) => {
        const curr = document.querySelector(`[data-name="${el}"]`);
        if (curr)
          formData[name].select
            ? (curr.className = 'notSelected')
            : (curr.className = 'cantSelect');
        console.log('Hello everyone');
      });

      return true;
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

export default Services;

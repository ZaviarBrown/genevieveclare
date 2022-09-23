import { useState, useEffect } from 'react';
import './Appointment.css';
import { allServices, selections, saveLocal } from '../utils';

const options = Object.keys(allServices);

interface ServiceProps {
  name: string;
}

const Services = (props: ServiceProps) => {
  const [formData, setFormData]: [any, any] = useState(allServices);
  const [choices, setChoices] = useState(selections(formData));

  const toggle = (input: any) => {
    const newData: any = { ...formData };
    const name = input.dataset.name;
    newData[name].select = !newData[name].select;
    input.className = formData[name].select ? 'selected' : 'notSelected';
    setFormData(newData);
    setChoices(selections(formData));
  };

  const lightService = (input: any) => {
    const name = input.dataset.name;

    if (input.className === 'cantSelect') return false;

    const newData = { ...formData };

    if (newData[name].disable) {
      newData[name].disable.forEach((el: string) => {
        const curr = document.querySelector(`[data-name="${el}"]`);
        if (curr) {
          newData[el].select = false;
          if (newData[name].select) curr.className = 'notSelected';
          else curr.className = 'cantSelect';
        }
      });
      setFormData(newData);
      setChoices(selections(formData));
    }

    return true;
  };

  useEffect(() => {
    const exception = choices.filter((el: string) => formData[el].disable)[0];

    const values: any = exception ? formData[exception].disable : [];
    const onOrOff =
      (choices.length >= 3 && !choices.includes('quiet')) ||
      choices.length >= 4;

    options.forEach((el: string) => {
      if (!choices.includes(el) && !values.includes(el) && el !== 'quiet') {
        const curr = document.querySelector(`[data-name="${el}"]`);
        if (curr)
          onOrOff
            ? (curr.className = 'cantSelect')
            : (curr.className = 'notSelected');
      }
    });
  }, [formData, choices]);

  useEffect(() => {
    if (localStorage[props.name]) {
      const newData = { ...formData };
      const storedChoices = [];
      for (const choice of JSON.parse(localStorage[props.name])) {
        const curr = document.querySelector(`[data-name="${choice}"]`);
        if (newData[choice].disable) lightService(curr);
        newData[choice].select = true;
        storedChoices.push(choice);
        if (curr) curr.className = 'selected';
      }
      setFormData(newData);
      setChoices(storedChoices);
    }
  }, []);

  useEffect(() => {
    saveLocal(allServices, choices, props.name, 'service');
  }, [choices, props.name]);

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

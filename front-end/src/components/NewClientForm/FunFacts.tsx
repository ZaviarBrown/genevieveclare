import { useEffect, useState } from 'react';
import { restoreLocal, saveLocal } from './utils';
import './Dev.css';

interface FunProps {
  name: string;
}

const FunFacts = (props: FunProps) => {
  // const [errors, setErrors] = useState([] as string[]);
  const [formData, setFormData] = useState('');

  useEffect(() => restoreLocal(props.name, setFormData), [props.name]);

  useEffect(() => {
    saveLocal({ fact: '' }, { fact: formData }, props.name);
  }, [formData, props.name]);

  return (
    <form className="form6">
      {/* {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null} */}

      <div className="selection">
        Anything you'd like me to know?
        <label>
          {' '}
          <input
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
          ></input>
        </label>
      </div>
    </form>
  );
};

export default FunFacts;

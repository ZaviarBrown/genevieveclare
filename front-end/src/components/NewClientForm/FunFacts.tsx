import { useEffect, useState } from 'react';
import { restoreLocal, saveLocal } from './utils';
import './Dev.css';

interface FunProps {
  name: string;
}

const FunFacts = (props: FunProps) => {
  // const [errors, setErrors] = useState([] as string[]);

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
          <input></input>
        </label>
      </div>

      <button type="submit">Ready to go!</button>
    </form>
  );
};

export default FunFacts;

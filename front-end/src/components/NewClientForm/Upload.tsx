import { useEffect, useState } from 'react';
import { restoreLocal, saveLocal } from './utils';
import './Dev.css';

interface UploadProps {
  name: string;
}

const Upload = (props: UploadProps) => {
  // const [errors, setErrors] = useState([] as string[]);

  return (
    <form className="form7">
      {/* {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null} */}

      <div className="selection">
        {' '}
        Upload a photo of yourself if you want me to know what I'm working with!
        <input type="file"></input>
      </div>

      <button type="submit">Ready to go!</button>
    </form>
  );
};

export default Upload;

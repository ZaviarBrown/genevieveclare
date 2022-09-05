import { useState } from 'react';
import './Dev.css';

interface UploadProps {
  name: string;
}

//TODO: Allow for multiple image uploads

const Upload = (props: UploadProps) => {
  const [formData, setFormData] = useState('');

  const showImages = (e: any) => {
    setFormData(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form className="form7">
      <div className="selection">
        {' '}
        Upload a photo of yourself if you want me to know what I'm working with!
        <input
          type="file"
          // value={formData}
          onChange={(e) => showImages(e)}
        ></input>
        {!formData.length ? null : <img src={formData} alt="test" />}
      </div>
    </form>
  );
};

export default Upload;

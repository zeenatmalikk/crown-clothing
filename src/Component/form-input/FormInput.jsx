import React from "react";
import './FormInput.scss'

const InputField = ({ handleChange, label, ...otherProps }) => {
  //other props are name,and other
  return (
    <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
  );
};

export default InputField;

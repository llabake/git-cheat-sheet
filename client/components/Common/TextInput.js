import React from 'react';

const TextInput = ({
  name, onChange, placeholder, value, error, icon, type, 
}) => (
  <div className="form-field">
    <i className="material-icons icon user-icon">{icon}</i>
    <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    <div className="error">
      {error}
    </div>
  </div>
);

export default TextInput;

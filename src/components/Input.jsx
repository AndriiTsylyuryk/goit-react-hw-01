import React from "react";

const Input = ({ placeholder, search, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

import React from "react";

const InputForm = ({ formHeading, type, name, value, handleChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold">{formHeading}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border rounded-md"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default InputForm;

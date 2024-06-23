import React from "react";

const SelectForm = ({ heading, name, value, handleChange, optns, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold">{heading}</label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border rounded-md"
      >
        <option value="">Select an option</option>
        {optns.map((optn, index) => (
          <option key={index} value={optn}>
            {optn}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default SelectForm;

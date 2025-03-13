import React from 'react';

function RatingRadio({ value, checked, handleChange }) {
  return (
    <label className="rating__input-label">
      {value}
      <input
        type="radio"
        value={value}
        name="rating-value"
        checked={checked}
        onChange={handleChange}
      />
    </label>
  );
}

export default RatingRadio;

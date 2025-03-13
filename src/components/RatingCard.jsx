import React, { useState } from 'react';
import RatingRadio from './RatingRadio';
import starIcon from '../assets/images/icon-star.svg';
import logo from '../assets/images/illustration-thank-you.svg';

function RatingCard() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const options = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setSelectedRating(Number(e.target.value));
  };

  return isSubmitted ? (
    <div className="rating rating-thanks">
      <img
        src={logo}
        className="thank-you-logo"
        alt="A logo of a credit cart and receipt"
      />
      <span className="selected-rating">
        You selected {selectedRating} out of {options.length}
      </span>
      <h3 className="thank-you-title">Thank you!</h3>
      <p className="thank-you-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  ) : (
    <div className="rating">
      <div className="rating__icon-container">
        <img src={starIcon} className="rating__icon" alt="Star icon" />
      </div>
      <h3 className="rating__title" id="rating-title">
        How did we do?
      </h3>
      <p className="rating__text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form action="#" className="rating__form" onSubmit={handleSubmit}>
        <fieldset aria-labelledby="rating-title" className="rating__fieldset">
          {options.map((option) => (
            <RatingRadio
              key={option}
              value={option}
              checked={option === selectedRating}
              handleChange={handleChange}
            />
          ))}
        </fieldset>
        <button type="submit" className="rating__submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RatingCard;

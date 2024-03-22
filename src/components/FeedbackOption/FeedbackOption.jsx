import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.buttonContainer}>
    {options.map(option => (
      <button
        key={option}
        type="button"
        className={styles.feedbackButton}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

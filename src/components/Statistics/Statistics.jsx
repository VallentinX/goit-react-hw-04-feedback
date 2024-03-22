import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statsContainer}>
    <p className={styles.statsItem}>Good: {good}</p>
    <p className={styles.statsItem}>Neutral: {neutral}</p>
    <p className={styles.statsItem}>Bad: {bad}</p>
    <p className={styles.statsItem}>Total: {total}</p>
    <p className={styles.statsItem}>Positive Feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

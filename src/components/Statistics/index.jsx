import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './styles.module.scss';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return (
    <>
      {total > 0 ? (
        <ul className={styles.list}>
          <li>Good: {good} </li>
          <li>Neutral: {neutral} </li>
          <li>Bad: {bad} </li>
          <li>Total: {total} </li>
          <li>Positive feedback: {Math.floor((good / total) * 100) || 0}%</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
export default Statistics;

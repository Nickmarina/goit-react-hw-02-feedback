import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <div className={styles.container}>
      {keys.map(key => (
        <button key={key} name={key} onClick={onLeaveFeedback}>
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <h2> {title} </h2>

    {children}
  </div>
);

Section.defaultProps = {
  children: '',
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Section;

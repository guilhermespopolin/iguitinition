import React from 'react';

import ReactMakdown from 'react-markdown';

import readme from '../../../../README.md';

import styles from './styles.css';

function Welcome() {
  return <ReactMakdown className={styles.layout} source={readme} />;
}

export default Welcome;

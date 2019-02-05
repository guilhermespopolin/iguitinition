import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

function Home({ text }) {
  return <h1 className={styles.blue}>{text}</h1>
}

Home.propTypes = {
  text: PropTypes.string,
}

Home.defaultProps = {
  text: 'Home!',
}

export default Home

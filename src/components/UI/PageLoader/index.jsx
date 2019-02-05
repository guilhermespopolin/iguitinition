import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

function PageLoader({ error, pastDelay }) {
  if (error) {
    return <h1>Something went wrong!!</h1>
  } else if (pastDelay) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.rubikLoader} />
      </div>
    )
  }

  return null
}

PageLoader.propTypes = {
  error: PropTypes.instanceOf(Error),
  pastDelay: PropTypes.bool,
}

PageLoader.defaultProps = {
  error: null,
  pastDelay: false,
}

export default PageLoader

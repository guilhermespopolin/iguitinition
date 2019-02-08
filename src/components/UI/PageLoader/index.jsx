import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

function PageLoader({ show }) {
  if (!show) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.rubikLoader} />
    </div>
  )
}

PageLoader.propTypes = {
  show: PropTypes.bool,
}

PageLoader.defaultProps = {
  show: true,
}

export default PageLoader

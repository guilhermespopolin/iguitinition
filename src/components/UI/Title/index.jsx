import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

function Title({ className, children, ...others }) {
  return <h1 className={cx(styles.title, className)} {...others}>{children}</h1>
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
}

Title.defaultProps = {
  className: '',
  children: '',
}

export default Title

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

function Input({ className, ...others }) {
  return <input className={cx(styles.input, className)} {...others} />
}

Input.propTypes = {
  className: PropTypes.string,
}

Input.defaultProps = {
  className: '',
}

export default Input

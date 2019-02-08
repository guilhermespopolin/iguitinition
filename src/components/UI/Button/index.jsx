import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

function Button({
  className,
  ...others
}) {
  return <button className={cx(styles.button, className)} {...others} />
}

Button.propTypes = {
  className: PropTypes.string,
}

Button.defaultProps = {
  className: '',
}

export default Button

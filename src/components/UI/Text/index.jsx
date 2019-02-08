import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

function Text({
  className,
  children,
  size,
  alignment,
  ...others
}) {
  return (
    <p
      className={cx(
        styles.text,
        styles[`text-size--${size}`],
        styles[`text-alignment--${alignment}`],
        className,
      )}
      {...others}
    >
      {children}
    </p>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  alignment: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
}

Text.defaultProps = {
  className: '',
  size: 'medium',
  alignment: 'justify',
}

export default Text

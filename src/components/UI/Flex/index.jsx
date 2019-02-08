import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

function Flex({
  className,
  display,
  direction,
  wrap,
  alignment,
  justify,
  ...others
}) {
  return (
    <div
      className={cx(
        styles[`flex-display--${display}`],
        styles[`flex-direction--${direction}`],
        styles[`flex-wrap--${wrap}`],
        styles[`flex-alignment--${alignment}`],
        styles[`flex-justify--${justify}`],
        className,
      )}
      {...others}
    />
  )
}

Flex.propTypes = {
  className: PropTypes.string,
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  wrap: PropTypes.oneOf(['wrap', 'no-wrap']),
  alignment: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
  justify: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
}

Flex.defaultProps = {
  className: '',
  display: 'flex',
  direction: 'row',
  wrap: 'wrap',
  alignment: 'center',
  justify: 'center',
}

export default Flex

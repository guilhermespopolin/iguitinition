import React from 'react'
import PropTypes from 'prop-types'

import Overlay from 'components/ui/Overlay'
import Loading from 'components/ui/Loading'

function PageLoader({ error, pastDelay, timeout }) {
  if (error) {
    return <h1>Something went wrong!</h1>
  } else if (timeout) {
    return <h1>Is taking a long time...refresh page</h1>
  } else if (pastDelay) {
    // should render loading component.
    // avoid flash of loading component
    return (
      <Overlay>
        <Loading />
      </Overlay>
    )
  }

  return null
}

PageLoader.propTypes = {
  error: PropTypes.instanceOf(Error),
  pastDelay: PropTypes.bool,
  timeout: PropTypes.bool,
}

PageLoader.defaultProps = {
  error: null,
  pastDelay: false,
  timeout: false,
}

export default PageLoader

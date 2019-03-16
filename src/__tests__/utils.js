import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import { ThemeProvider } from 'styled-components'

import defaultTheme from 'themes/default'

// Utility function that allows render styled-components properly
const renderComponent = child =>
  // eslint-disable-next-line react/jsx-filename-extension
  render(<ThemeProvider theme={defaultTheme}>{child}</ThemeProvider>)

export default renderComponent

